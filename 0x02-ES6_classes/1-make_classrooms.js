import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const CR = new ClassRoom(19);
  const CR2 = new ClassRoom(20);
  const CR3 = new ClassRoom(34);
  return [CR, CR2, CR3];
}
