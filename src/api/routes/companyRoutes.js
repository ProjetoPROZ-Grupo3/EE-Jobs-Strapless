const express = require('express')
const companyController = require("../controller/companyController")

const router = express.Router()

router.post('/api/companies', companyController.createCompany)
router.get('/api/companies/:id', companyController.getCompany)
router.get('/api/companies', companyController.getAllCompanies)
router.put('/api/companies/:id', companyController.updateCompany)

// CUSTOM QUERY
router.get('/api/search/company_names', companyController.companyNames)

module.exports = router