module.exports = {
  type: 'number',
  name: 'retryCount',
  message: 'Max retry count?',
  default: 3,
  when: _answers => ['web', 'mobile'].includes(_answers.arch)
};
