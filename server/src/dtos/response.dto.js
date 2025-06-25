class ResponseDTO {
  constructor() {
    this.content = null
    this.message = "" 
    this.error   = false
  }

  setContent(content) {
    this.content = content
    return this
  }

  setMessage(message) {
    // fix this
    if (typeof message !== 'string') throw TypeError('Invalid type: message must be string');
    
    this.message = message
    return this
  }

  setError(error) {

    if (typeof error !== 'boolean') throw TypeError("Invalid type: error must be boolean")
    
    this.error = error

    return this
  }

  build() {
    return {
      content: this.content,
      message: this.message,
      error: this.error
    }
  }
}

module.exports = ResponseDTO;
