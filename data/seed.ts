import { timeStamp } from 'console';
import { v4 as uuidv4 } from 'uuid';
import { gender, userType, plantPlacement, plantState, userContentFlag, careRoutineStepFrequency } from '@prisma/client';


export const users = [
    {
        id: uuidv4(),
        name: "Kamil",
        email: "kamilMail1231231231@gmail.com",
        phoneNumber: "+481111111111",
        password: "password1",
        gender: gender.male,
    },
    {
        id: uuidv4(),
        name: "Caroline",
        email: "caroline.Mail+plantBudApp@gmail.com",
        phoneNumber: "+48123456789",
        password: "password",
        gender: gender.female,
        points: 100,
        userType: userType.admin,
    },
    {
        id: uuidv4(),
        name: "Greg",
        email: "greg.Mail+plantBudApp@gmail.com",
        phoneNumber: "+48123456789123",
        password: "passwordGreg",
        gender: gender.preferNotToTell,
    },
]

export const plantTypes = [
    {
        id: uuidv4(),
        species: "Monstera adansonii",
        type: "House Plant",
        description: "Monstera Adansona (Monstera adansonii Schott) – gatunek wieloletnich, wiecznie zielonych pnączy z rodziny obrazkowatych, pochodzący z obszaru od Belize do Peru i Brazylii, introdukowany w Portoryko, zasiedlający lasy deszczowe strefy równikowej. Z uwagi na atrakcyjne liście gatunek ten jest uprawiany jako roślina pokojowa."
    },
    {
        id: uuidv4(),
        species: "Monstera deliciosa",
        type: "House Plant",
        description: "Monstera dziurawa (Monstera deliciosa) – gatunek rośliny występujący w lasach tropikalnych od południowego Meksyku po południową Panamę. W Polsce jest uprawiany jako roślina ozdobna."
    }
]

export const plants = [
    {
        id: uuidv4(),
        plantName: "kwiatuś",
        plantTypeId: "a956aa14-4f87-454e-8c69-c238da119502",
        plantImage: "https://i.etsystatic.com/21226428/r/il/8d8dbc/3753179827/il_794xN.3753179827_j3i8.jpg",
        plantState: plantState.good,
        userId: "7d2b0330-e3d5-40be-a38d-6d110ed79c14"//jakies userid
    },
    {
        id: uuidv4(),
        plantName: "dziurak",
        plantTypeId: "de224987-adf3-4907-ab09-09dacd5d0c37",
        plantImage: "https://a.allegroimg.com/original/114271/2526d6e84ba09998b0f6ab05059f/Ladna-Monstera-Deliciosa-Dziurawa-Filodendron",
        plantState: plantState.thriving,
        plantPlacement: plantPlacement.inside,
        userId: "fa2cb2ea-2b49-4447-b719-caa17ba3d177"//jakies userid
    },
    {
        id: uuidv4(),
        plantName: "greguś",
        plantTypeId: "de224987-adf3-4907-ab09-09dacd5d0c37",
        plantImage: "https://a.allegroimg.com/original/114271/2526d6e84ba09998b0f6ab05059f/Ladna-Monstera-Deliciosa-Dziurawa-Filodendron",
        plantState: plantState.thriving,
        plantPlacement: plantPlacement.inside,
        userId: "9bcc9097-5dd2-4250-bf57-d99543e903c5"//jakies userid
    }
]


export const careRoutine = [
    {
        id: uuidv4(),
        isCompleted: false,
        isActive: true,
        isShared: false,
        flag: userContentFlag.default,
        plantId: "8be2642b-bb25-4fb9-af45-1fdb8355a6eb" //id z rosliny
    },
    {
        id: uuidv4(),
        isCompleted: false,
        isActive: true,
        isShared: false,
        flag: userContentFlag.default,
        plantId: "a2d496f7-f11a-4a7e-89ab-34ab2d31b985" //id z rosliny
    },
    {
        id: uuidv4(),
        isCompleted: false,
        isActive: true,
        isShared: false,
        flag: userContentFlag.default,
        plantId: "4238d0de-f28f-43f5-88dd-cc81886a8d69" //id z rosliny
    },
]


export const careRoutineStep = [
    //kwiatek kamila
    {
        id: uuidv4(),
        description: "podlej mnie",
        isCompleted: false,
        stepFrequency: careRoutineStepFrequency.everyFiveDays,
        careRoutineId: "02ba5977-cc70-48bc-9e9d-3d572a514f16" //id z rutyny
    },
    {
        id: uuidv4(),
        description: "potrzep mną(zasymuluj huragan)",
        isCompleted: false,
        stepFrequency: careRoutineStepFrequency.other,
        otherFrequency: "co pełnie księżyca",
        careRoutineId: "02ba5977-cc70-48bc-9e9d-3d572a514f16" //id z rutyny
    },
    {
        id: uuidv4(),
        description: "wystaw mnie do słońca",
        isCompleted: false,
        stepFrequency: careRoutineStepFrequency.weekly,
        careRoutineId: "02ba5977-cc70-48bc-9e9d-3d572a514f16" //id z rutyny
    },
    //kwiatek caroline
    {
        id: uuidv4(),
        description: "wystaw mnie do słońca",
        isCompleted: false,
        stepFrequency: careRoutineStepFrequency.default,
        careRoutineId: "de6923aa-4773-49b6-937d-9f68c43af443" //id z rutyny
    },
    {
        id: uuidv4(),
        description: "podlej mnie",
        isCompleted: false,
        stepFrequency: careRoutineStepFrequency.everyFiveDays,
        careRoutineId: "de6923aa-4773-49b6-937d-9f68c43af443" //id z rutyny
    },
    //kwiatek grega
    {
        id: uuidv4(),
        description: "wystaw mnie do słońca",
        isCompleted: false,
        stepFrequency: careRoutineStepFrequency.default,
        careRoutineId: "59ae33b7-5bcd-473b-a581-ccfe49fe3e1f" //id z rutyny
    },
    {
        id: uuidv4(),
        description: "podlej mnie",
        isCompleted: false,
        stepFrequency: careRoutineStepFrequency.everyFiveDays,
        careRoutineId: "59ae33b7-5bcd-473b-a581-ccfe49fe3e1f" //id z rutyny
    },
]

