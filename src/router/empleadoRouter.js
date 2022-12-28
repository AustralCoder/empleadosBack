const express = require("express");
const empleado = require("./../models/empleado");

const router = express.Router();

router.post("/empleado", async (req,res)=>{
    console.log(req.body);
    const data = new empleado(req.body)
    const result = await data.save()


    if(!result){
        res.json({
            status:"Fallido",
            message:"empleado no registrado"
        })
    }

    else{
        res.json({
            status:"Exitoso",
            message:"empleado registrado correctamente",
            data:result
        })
    }
});

//get todo
router.get("/empleado",async(req,res)=>{
try {
    const result = await empleado.find()
    if(!result){
        res.json({
            status: "Fallido",
            message: "empleado no encontrado"
        })

    }
    else{
        res.json({
            status: "Exitoso",
            message: "Empleado encontrado",
            data:result
        })
    }
} catch (e) {
    console.log(e)
}
});

//get id
router.get("/empleado/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const result = await empleado.findById(_id);

        if(!result){
            res.json({
                status: "Fallido",
                message: "empleado no encontrado con esta ID"
            })
    
        }
        else{
            res.json({
                status: "Exitoso",
                message: "Empleado encontrado",
                data:result
            })
        }

    } catch (e) {
        console.log(e)
    }
});

//actualizar empleado

router.put("/empleado/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const result = await empleado.findByIdAndUpdate(_id,req.body,{new: true});
        console.log(result)
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Records not Update....",
                data: result
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Record is Updated successfully...",
                data: result
            })
        }
    }
    catch (e) {
        res.send(e)
    }
});

//borrar empleado

router.delete("/empleado/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const result = await empleado.findByIdAndDelete(_id);

        if(!result){
            res.json({
                status: "Fallido",
                message: "empleado no fue eliminado con exito"
            })
    
        }
        else{
            res.json({
                status: "Exitoso",
                message: "Empleado eliminado",
                data:result
            })
        }

    } catch (e) {
        console.log(e)
    }
});


module.exports = router