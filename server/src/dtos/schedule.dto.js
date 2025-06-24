class GetAllSchedulesDTO {
  constructor() {
    this.id = null
    this.course_name = ""
    this.start_time = ""
    this.end_time = ""
    this.slide_url = ""
    this.house = {
      id: null,
      name: ""
    }
  }

  setId(id) {
    if (typeof id !== 'number') throw TypeError("Invalid type: id must be number")
    this.id = id
    return this
  }

  setCourseName(course_name) {
    if (typeof course_name !== 'string') throw TypeError('Invalid type: course_name must be string');
    this.course_name = course_name
    return this
  }

  setStartTime(start_time) {
    if (typeof start_time !== 'string') throw TypeError('Invalid type: start_time must be string')
    this.start_time = start_time
    return this
  }

  setEndTime(end_time) {
    if (typeof end_time !== 'string') throw TypeError('Invalid type: end_time must be string')
    this.end_time = end_time
    return this
  }

  setSlideUrl(slide_url) {
    if (typeof slide_url !== 'string') throw TypeError('Invalid type: slide_url must be string')
    this.slide_url = slide_url
    return this
  }

  setHouse(id, name) {
    if (typeof id !== 'number') throw TypeError('Invalid type: id must be number')
    if (typeof name !== 'string') throw TypeError('Invalid type: name must be string')
    this.house = {
      id: id,
      name: name
    }
    return this
  }

  build() {
    return {
      id: this.id,
      course_name: this.course_name,
      start_time: this.start_time,
      end_time: this.end_time,
      slide_url: this.slide_url,
      house: this.house
    }
  }
  
}

class GetScheduleByIdDTO {
	constructor() {
		this.id = null;
		this.course_name = '';
		this.start_time = '';
		this.end_time = '';
		this.slide_url = '';
		this.house = {
			id: null,
			name: ''
		};
	}

	setId(id) {
		if (typeof id !== 'number')
			throw TypeError('Invalid type: id must be number');
		this.id = id;
		return this;
	}

	setCourseName(course_name) {
		if (typeof course_name !== 'string')
			throw TypeError('Invalid type: course_name must be string');
		this.course_name = course_name;
		return this;
	}

	setStartTime(start_time) {
		if (typeof start_time !== 'string')
			throw TypeError('Invalid type: start_time must be string');
		this.start_time = start_time;
		return this;
	}

	setEndTime(end_time) {
		if (typeof end_time !== 'string')
			throw TypeError('Invalid type: end_time must be string');
		this.end_time = end_time;
		return this;
	}

	setSlideUrl(slide_url) {
		if (typeof slide_url !== 'string')
			throw TypeError('Invalid type: slide_url must be string');
		this.slide_url = slide_url;
		return this;
	}

	setHouse(id, name) {
		if (typeof id !== 'number')
			throw TypeError('Invalid type: id must be number');
		if (typeof name !== 'string')
			throw TypeError('Invalid type: name must be string');
		this.house = {
			id: id,
			name: name
		};
		return this;
	}

	build() {
		return {
			id: this.id,
			course_name: this.course_name,
			start_time: this.start_time,
			end_time: this.end_time,
			slide_url: this.slide_url,
			house: this.house
		};
	}
}