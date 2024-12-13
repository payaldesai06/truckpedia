<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{$pageTitle ?? ''}}</title>

    <style>
        .page-break {
            page-break-after: always;
        }
    </style>
</head>
<body>

@foreach ($images as $image)
    <img src="{{$image}}" style="max-height: 95%; max-width:700px;margin: 0 auto;"/>
    @if (!$loop->last)
        <div class="page-break"></div>
    @endif
@endforeach

</body>
</html>
