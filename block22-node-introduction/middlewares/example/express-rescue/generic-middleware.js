
// Por último, um padrão muito comum é ter um middleware de erro genérico, e outros middlewares que convertem erros para esse formato genéric

module.exports = (err, req, res, next) => {
    if (err.code && err.status) {
      return res.status(err.status).json({ message: err.message, code: err.code });
    }
  
    return res.status(500).json({ message: err.message });
  }

//   O middleware acima verifica se o erro possui um código e um status HTTP . Caso possua, o código e a mensagem são devolvidas na response. Caso contrário um erro genérico de servidor é utilizado.
