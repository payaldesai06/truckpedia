import axios from '../http/axios'

export default {
  async getAllFactoringCompanies() {
    return await axios.get('/factoring-companies')
  },

  async createFactoringCompany(factoringCompany) {
    return await axios.post('/factoring-companies', factoringCompany)
  },

  async updateFactoringCompany(factoringCompany) {
    const payload = {
      address: factoringCompany.address,
      billing_email: factoringCompany.billing_email,
      city: factoringCompany.city,
      name: factoringCompany.name,
      phone_number: factoringCompany.phone_number,
      state: factoringCompany.state,
      zip_code: factoringCompany.zip_code,
      factoring_fee_fractional: factoringCompany.factoring_fee_fractional,
      request_payment_merge_pdfs: factoringCompany.request_payment_merge_pdfs,
      integrationPartner: factoringCompany.integrationPartner
    };

    return await axios.patch(
        `/factoring-companies/${factoringCompany.id}`, payload)
  },

  async deleteFactoringCompany(factoringCompanyId) {
    return await axios.delete(`/factoring-companies/${factoringCompanyId}`)
  },
}
