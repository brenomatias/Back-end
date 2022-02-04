module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization || authorization.length !== 16) {
      return res.status(401).json({message: 'Token inválido'});
    }

    return next;
}

// HTTP header fields are a list of strings sent and received by both the client program and server on every HTTP request and response. These headers are usually invisible to the end-user and are only processed or logged by the server and client applications