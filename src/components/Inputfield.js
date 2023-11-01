
const Inputfield = () => {
  return (
    <div className="container">
    <div className="Form">
        <div className="Name">
            <input type="text" id="name" />
            <label htmlFor="name" className="form-label">Name</label>
        </div>
        <div className="Email">
            <input type="text" id="email" />
            <label htmlFor="email" className="form-label2">Email</label>
        </div>
        <div className="add">
        <button className="btn">ADD</button>
        </div>
    </div>
    </div>
  )
}

export default Inputfield