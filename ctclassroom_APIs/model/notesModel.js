const mongo = require('mongoose')

const notesSchema = mongo.Schema({
    'semester_id':{type:mongo.Schema.Types.ObjectId, ref:'semester', default:''},
    'title':{type:String, default:''},
    'semester_name':{type:String,default:''},
    'description':{type:String, default:''},
    'notes':{type:String, default:''},
    'created_at':{type:Date, default:Date.now()},
    'is_blocked':{type:String, default:'Unblocked'},
    
})

module.exports= mongo.model('notes',notesSchema)