import Team from '../team';

const zombie = { name: 'Sean' };
const magician = { name: 'Illusion' };
const daemon = { name: 'Nick' };

test('check Team class for add character', () => {
  const villainTeam = new Team();
  villainTeam.add(zombie);
  villainTeam.add(magician);
  expect([...villainTeam.members]).toEqual([zombie, magician]);
});

test('check Team class for an error when duplicating a character', () => {
  const villainTeam = new Team();
  villainTeam.add(zombie);
  expect(() => { villainTeam.add(zombie); }).toThrow();
});

test('check Team class for add all character', () => {
  const villainTeam = new Team();
  villainTeam.addAll(zombie, magician, daemon, magician, daemon);
  expect([...villainTeam.members]).toEqual([zombie, magician, daemon]);
});

test('check Team class to return an array of characters', () => {
  const villainTeam = new Team();
  villainTeam.addAll(daemon, zombie, magician, daemon, magician, daemon);
  expect(villainTeam.toArray()).toEqual([daemon, zombie, magician]);
});
