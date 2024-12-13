import { setUserCustomization, getPipeline } from "@/services/PipelineService-v2"

export default {
  async setUserCustomization (_, payload) {
    const response = await setUserCustomization(payload)
    return response
  },
  async getPipeline (_, payload) {
    const response = await getPipeline(payload)
    return response
  }
}
