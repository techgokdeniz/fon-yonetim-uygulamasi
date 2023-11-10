async function ResponseGenerator(res, status, error, data, message) {
  return res.status(status).json({
    error,
    message,
    data,
  });
}

export default ResponseGenerator;
