import { gender, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// async function main() {
// ... you will write your Prisma Client queries here
// await prisma.projectAssignment.createMany({
//     data: assignments,
// })

// const allprojectAssignments = await prisma.project.findMany();
// console.log(JSON.stringify(allprojectAssignments))



async function main() {
    // await prisma.user.createMany({
    //     data: users,
    // })

    // const allUsers = await prisma.user.findMany();
    // console.log(allUsers)

    // await prisma.plantType.createMany({
    //     data: plantTypes,
    // })

    // const allPlantTypes = await prisma.plantType.findMany();
    // console.log(allPlantTypes)

    // await prisma.plant.createMany({
    //     data: plants,
    // })

    // const allPlants = await prisma.plant.findMany();
    // console.log(allPlants)

    // await prisma.careRoutine.createMany({
    //     data: careRoutine,
    // })

    // const allCareRoutines = await prisma.careRoutine.findMany();
    // console.log(allCareRoutines)

    // await prisma.routineStep.createMany({
    //     data: careRoutineStep,
    // })

    // const allCareRoutinesSteps = await prisma.routineStep.findMany();
    // console.log(allCareRoutinesSteps)

    // const result = await prisma.user.findMany()

    // const result = await prisma.plant.findMany({
    //     where: {
    //         userId: {
    //             contains: "ec401a29-563f-470c-81bf-6825d99ecbc6"
    //         }
    //     },
    //     include: {
    //         careRoutine: {
    //             include: {
    //                 routineSteps: true
    //             }
    //         }
    //     }
    // })
    // const userPlants = result
    // console.log(userPlants)

    // const user = await prisma.user.create({
    //     data: {
    //       name: 'Elsa Prisma',
    //       userName: 'elsaplantaccount',
    //       email: 'elsa@prisma.io',
    //       password: 'passwodtezzzddd',
    //       phoneNumber: '+58965236547',
    //       gender: gender.preferNotToTell,
    //     },
    //   })
    //   console.log(user)

    const res = await prisma.user.findFirst({
        where: {
            userName: "dupadupa"
        }
    });
    console.log(res)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })





// export const getUsers = async () => {
//     const result = await prisma.user.findMany({
//         include: { projects: { include: { project: true } } },
//     })
//     const allUsers = result.map((user) => {
//         return { ...user, projects: user.projects.map((assignment) => assignment.project) }
//     })

//     return allUsers
// }



// }

// main()
//     .then(async () => {
//         await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })