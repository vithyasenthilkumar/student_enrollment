const express=require('express')
const router=express.Router()
const {getStudent,getAllstudents, createANewstudent, getAstudent,updateAstudent,deleteAstudent}=require('../controllers/students')
router.route('/').get(getAllstudents).post(createANewstudent)
router.route('/:id').get(getStudent,getAstudent).patch(getStudent,updateAstudent).delete(getStudent,deleteAstudent)

module.exports=router 

// const express=require('express')
// const router=express.Router()
// const studentModel=require('../models/students')
// router.get('/',async(request,response)=>
// {
//     //response.send('Displaying all the students')
//     try{
//     const students=await studentModel.find();
//     response.status(200).json(students);
// }
// catch(error){
//     response.status(500).json({message:error.message})
// }
// })
// router.post('/',async(request,response)=>
// {
//     //response.send('Adding new student')
//     const newstudent=new studentModel({
//         name:request.body.name ,
//         enrolledDepartment:request.body.enrolledDepartment ,
//         enrollmentDate:request.body.enrollmentDate
//     })
//     try{
//         const student=await newstudent.save();
//         response.status(201).json(student);
//     }
//     catch(error){
//         response.status(500).json({message:error.message})
//     }
// })
// router.get('/:id',getStudent,(request,response)=>{
//     //response.send(`Updating student with id ${request.params.id}`);
//     response.status(200).json(response.student)
// })
// router.delete('/:id',getStudent,async(request,response)=>
// {
//     //response.send('Deleting all the students')
//     try{
//         await response.student.deleteOne();
//         response.json({message:`Deleted the user ${response.student.name}`})
//     }
//     catch(error){
//         response.status(500).json({message:error.message})
//     }
// })
// router.patch('/:id',getStudent,async(request,response)=>
// {
//     //response.send('Updating all the students')
//     if(request.body.name!=null)
//     {
//         response.student.name=request.body.name;
//     }
//     if(request.body.enrolledDepartment!=null)
//     {
//         response.student.enrolledDepartment=request.body.enrolledDepartment;
//     }
//     if(request.body.enrollmentDate!=null)
//     {
//         response.student.enrollmentDate=request.body.enrollmentDate;
//     }
//     try{
//         const updatedStudent = await response.student.save();
//         response.status(201).json(updatedStudent);
//     }
//     catch(error){
//         response.status(401).json({message:error.message})
//     }
    

// })
// async function getStudent(request,response,next){
//     let student
//     try{
//         student=await studentModel.findById(request.params.id)
//         if(student==null){
//            return  response.status(404).json({message:`Cannot find user with id ${request.params.id}`})

//         }
//     }
//     catch(error){
// return response.status(500).json({message:error.message})
//     }
//     response.student=student;
//     next()
// }
 //module.exports=router