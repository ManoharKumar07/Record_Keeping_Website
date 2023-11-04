import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
const Field = (element) => {
    const removeItem = (index) => {
    let arr = element.data;
    arr.splice(index, 1);
    element.setData([...arr]);
  };
  return (
    <div>
     
                <div className="dataItem">
                  <div className="file">
                    <h4>{element.name}</h4>
                  </div>
                  <div className="file">
                    <h4>{element.email}</h4>
                  </div>
                  <div className="file">
                    <button
                      className="delbtn"
                      onClick={() => {
                        removeItem(element.index);
                      }}
                    >
                      <PersonRemoveIcon />
                    </button>
                  </div>
                </div>
              </div>
  )
}

export default Field