let inst_logo, fingerprint, voice; /*Variables for Steganography*/
let studentname, roll, university, yop, dgpa, reportcardname, reportcard; /*Variables to add to Database*/
logoreader = new FileReader(); /*For institution logo*/
fingerreader = new FileReader(); /*For fingerprint*/
voicereader = new FileReader(); /*For voice*/
pdfreader = new FileReader(); /*For pdf file*/

/*Retrieve Logo on Using Clicking Choose file*/
const logo_input = document.querySelector("#logo");
logo_input.addEventListener("change", function(){
    console.log('Watermark selected.');
    console.log(logo_input.value);
    logoreader.readAsDataURL(this.files[0]);
})

/*Retrieve fingerprint on Using Clicking Choose file*/
const fingerprint_input = document.querySelector("#fingerprint");
fingerprint_input.addEventListener("change", function(){
    console.log('Fingerprint selected.');
    console.log(fingerprint_input.value);
    fingerreader.readAsDataURL(this.files[0]);
})

/*Retrieve voice clip on Using Clicking Choose file*/
const voice_input = document.querySelector("#voice");
voice_input.addEventListener("change", function(){
    console.log('Voice Password selected.');
    console.log(voice_input.value);
    voicereader.readAsDataURL(this.files[0]);
})

/*Retrieve pdf file on Using Clicking Choose file*/
const pdf_input = document.querySelector("#pdf_input");
pdf_input.addEventListener("change", function(){
    console.log('Report Card selected.');
    console.log(pdf_input.value);
    pdfreader.readAsDataURL(this.files[0]);
    pdfreader.addEventListener("load", () => {
        console.log(pdfreader.result);
    });
})

document.getElementById("submit").onclick = take_entries; /*Activate on clicking "Submit Button"*/

async function take_entries(){
    /*Assign Entries to variables*/
    studentname = document.getElementById("studentname").value;
    roll = document.getElementById("roll").value;
    university = document.getElementById("university").value;
    yop = document.getElementById("yop").value;
    dgpa = document.getElementById("dgpa").value;
    reportcardname = pdf_input.value;
    reportcard = pdfreader.result;
    /*Stringify and Send Data to server*/
    const data = {studentname, roll, university, yop, dgpa, reportcardname, reportcard};
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };
    /*Recieving Response.json from Server*/
    const response = await fetch('/api', options);
    const json = await response.json();
    console.log(json);
}