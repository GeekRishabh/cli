module.exports = {
  type: 'list',
  name: 'type',
  message: 'What are we building for ?',
  default: 'react',
  choices: ['react', 'wdio'],
  validate: function(answer) {
    if (answer.length < 1) {
      return 'You must choose at least one ';
    }
    return true;
  }
};
