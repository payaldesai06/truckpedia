<?php

namespace App\Package\FindInSet;

trait FindInSetRelationTrait
{
    /**
     * Define a has many relation with null.
     *
     * @param  string  $related
     * @param  string  $foreignKey
     * @param  string  $localKey
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function FindInSetMany($related, $localKey = null, $foreignKey = null, $index = null)
    {
        $instance = $this->newRelatedInstance($related);

        $foreignKey = $foreignKey ?: $this->getForeignKey();

        $localKey = $localKey ?: $this->getKeyName();

        return new FindInSetRelation(
            $instance->newQuery(),
            $this,
            $instance->getTable() . '.' . $foreignKey,
            $localKey,
            $index
        );
    }
}
