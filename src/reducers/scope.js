import * as types;

const initialState = {
    cropId: null, //the ID of the crop currently being examined (or what the user is about to take a picture of)
    loadingDiagnosis: false,
    diagnosisComplete: false, //whether or not the diagnosis has finished loading
    diagnosis: null //object containing details of the diagnosis
};

export default function scope(state = initialState, action) {
    switch (action.type) {
        case types.CAPTURE:
            
    }
}