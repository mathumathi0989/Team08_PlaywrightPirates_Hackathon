export class TestDataHelper {

constructor (page){
    this.page = page;
    this.patientName = null;
}

get patientName(){
    return this.patientName;
}

set patientName(value){
    this.patientName = value;
}



}