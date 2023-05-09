/* Model === class == object Generator */
const mongoose = require("mongoose");
/* Define Schema */
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ActivitySchema = new Schema({
    activityName:{
        type: String,
        required: true,
    },
    activityPicture:{
        type: String,
        required: true,
    },
    activityTitle:{
        type: String,
        required: true,
    },
    activityCaption:{
        type: String,
        required: true,
    },
    taskStatus:{
        type: String,
        required: true,
    },
    activityDate:{
        type: String,
        required: true,
    },
    activityTimeStart:{
        type: Number,
        required: true,
    },
    activityTimeEnd:{
        type: Number,
        required: true,
    },
    activityDuration:{
        type: String,
        required: true,
    },
    

});
/* Create Model */
const ActivityModel = mongoose.model("Activity", ActivitySchema);

/* Export Model for another file use */

module.exports = ActivityModel;