


1: get request: READ DATA FROM DATABASE : 
find() = get all data
findById() = get specefic data via ID
2: put request: UPDATE DATA FROM DATABASE
findByIdAndUpdate() 
3: post request: ADD DATA TO DATABASE
model.create(req.body)
or
model.save()

4: delete request: DELETE DATA FROM DATABASE

findByIdAndDelete(req.body)
