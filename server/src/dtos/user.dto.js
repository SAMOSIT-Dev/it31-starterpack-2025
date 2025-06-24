class UserLoginDTORequest {
  constructor() {
    this.id = null
    this.password = null
  }

  setId(id) {
    if (id == null) throw TypeError('Invalid argument: id must not be empty')
    if (typeof id !== 'string') throw TypeError('Invalid type: id must be string')
    if (id.length !== 11) throw Error('Invalid argument: id must be 11 characters long')

    this.id = id
    return this
  }
  
  setPassword(password) {
    if (password == null) throw TypeError('Invalid argument: password must not be empty');
		if (typeof password !== 'string') throw TypeError('Invalid type: password must be string');

    this.password = password
    return this
  }

  build() {
    return {
      id: this.id,
      password: this.password
    }
  }
}

class UserLoginDTOResponse {
  constructor() {
    this.auth_token = ""
    this.refresh_token = ""
    this.expires_in = ""
    this.user_profile = {
      id: "",
      nickname: "",
      profile_description: "",
      age: null,
      house: {
        id: null,
        name: ""
      }
    }
  }

  setAuthToken(auth_token) {
    if (typeof auth_token !== 'string') throw TypeError('Invalid type: auth_token must be string')
    this.auth_token = auth_token
    return this
  }

  setRefreshToken(refresh_token) {
    if (typeof refresh_token !== 'string') throw TypeError('Invalid type: refresh_token must be string')
    this.refresh_token = refresh_token
    return this
  }
  
  setExpiresIn(expires_in) {
    if (typeof expires_in !== 'string') throw TypeError('Invalid type: expires_in must be string')
    this.expires_in = expires_in
    return this
  }

  setUserProfile(user_profile) {
    if (typeof user_profile.id !== 'string') throw TypeError('Invalid type: id must be string')
    if (typeof user_profile.nickname !== 'string') throw TypeError('Invalid type: nickname must be string')
    if (typeof user_profile.profile_description !== 'string') throw TypeError('Invalid type: profile_description must be string')
    if (typeof user_profile.age !== 'number') throw TypeError('Invalid type: age must be number')
    if (typeof user_profile.house.id !== 'number') throw TypeError('Invalid type: house.id must be number')
    if (typeof user_profile.house.name !== 'string') throw TypeError('Invalid type: house.name must be string')
    this.user_profile = user_profile
    return this
  }

  build() {
    return {
      auth_token: this.auth_token,
      refresh_token: this.refresh_token,
      expires_in: this.expires_in,
      user_profile: this.user_profile
    }
  }
}

class UpdateUserProfileDTORequest {
  constructor() {
    this.id =  ""
    this.profile_description = ""
    this.age = null
    this.house_id = null
  }

  setId(id) {
    if (typeof id !== 'string') throw TypeError('Invalid type: id must be string')

    this.id = id
    return this
  }
  
  setProfileDescription(profile_description) {
    if (typeof profile_description !== 'string') throw TypeError('Invalid type: profile_description must be string')
    this.profile_description = profile_description
    return this
  }
  
  setAge(age) {
    if (typeof age !== 'number') throw TypeError('Invalid type: age must be number')
    this.age = age
    return this
  }

  setHouseId(house_id) {
    if (typeof house_id !== 'number') throw TypeError('Invalid type: house_id must be number')
    this.house_id = house_id
    return this
  }

  build() {
    return {
      id: this.id,
      profile_description: this.profile_description,
      age: this.age,
      house_id: this.house_id
    }
  }
}

class UpdateUserProfileDTOResponse {
	constructor() {
		this.id = null;
		this.nickname = '';
		this.profile_description = '';
		this.age = null;
		this.house_id = null;
		this.created_at = '';
		this.updated_at = '';
	}

	setId(id) {
		if (typeof id !== 'string')
			throw TypeError('Invalid type: id must be string');

		this.id = id;
		return this;
	}

  setNickName(nickname) {
    if (typeof nickname !== 'string') throw TypeError('Invalid type: nickname must be string')
    this.nickname = nickname
    return this
  }

	setProfileDescription(profile_description) {
		if (typeof profile_description !== 'string')
			throw TypeError('Invalid type: profile_description must be string');
		this.profile_description = profile_description;
		return this;
	}

	setAge(age) {
		if (typeof age !== 'number')
			throw TypeError('Invalid type: age must be number');
		this.age = age;
		return this;
	}

	setHouseId(house_id) {
		if (typeof house_id !== 'number')
			throw TypeError('Invalid type: house_id must be number');
		this.house_id = house_id;
		return this;
  }
  
  setCreatedAt(created_at) {
    if (typeof created_at !== "string") throw TypeError('Invalid type: created_at must be string')
    this.created_at = created_at
    return this
  }

  setUpdatedAt(updated_at) {
    if (typeof updated_at !== 'string') throw TypeError('Invalid type: updated_at must be string')
    this.updated_at = updated_at
    return this
  }
}