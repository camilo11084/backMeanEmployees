const { Router } = require('express')
const router = Router()

const employeesCtrler = require('../controllers/employees.controller.js')

router.get('/', employeesCtrler.getEmployees);
router.post('/', employeesCtrler.createEmployee);
router.get('/:id', employeesCtrler.getEmployee);
router.put('/:id', employeesCtrler.editEmployee);
router.delete('/:id', employeesCtrler.deleteEmployee);

module.exports = router;