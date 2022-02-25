const employeesCtrler = {}
const Employee = require('../models/Employee')


employeesCtrler.getEmployees = async (req, res) => {
    const employees = await Employee.find()
    res.json(employees)
}
employeesCtrler.createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body)
    //console.log(newEmployee);
    await newEmployee.save()
    res.send({message: 'Employee created'})
}
employeesCtrler.getEmployee = async (req, res) => {
    console.log(req.params)
    const employee = await Employee.findById(req.params.id)
    res.send(employee)
}
employeesCtrler.editEmployee = async(req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Employee update!'})
}

employeesCtrler.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status: 'Employee deelted'})
}

module.exports = employeesCtrler