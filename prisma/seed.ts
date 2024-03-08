import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';
import { addDays, set } from 'date-fns';
const prisma = new PrismaClient();

export async function main() {
  const tomorrow0900am = set(addDays(new Date(), 1), {
    hours: 9,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  const tomorrow1130am = set(addDays(new Date(), 1), {
    hours: 11,
    minutes: 30,
    seconds: 0,
    milliseconds: 0,
  });

  const appointmentShowroom1 = {
    id: randomUUID(),
    startTime: tomorrow0900am,
    endTime: tomorrow1130am,
    customer: 'Galeries Lafayette',
    seller: 'Alan A.',
    showroom: 'Showroom 1',
  };

  const appointmentShowroom2 = {
    id: randomUUID(),
    startTime: tomorrow0900am,
    endTime: tomorrow1130am,
    customer: 'Galeries Lafayette',
    seller: 'Stephanie S.',
    showroom: 'Showroom 2',
  };

  const initialState = [appointmentShowroom1, appointmentShowroom2];
  await initialState.map((data) => {
    return prisma.appointment.create({ data });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
