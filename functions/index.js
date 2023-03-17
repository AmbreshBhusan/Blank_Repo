exports.handler = async (event, context) => {
  console.log('START');
  console.info('Context:', JSON.stringify(context));
  console.info('Event:', JSON.stringify(event));
  console.log('FINISH');
};
