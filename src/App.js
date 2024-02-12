import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.results[0];
        let newObj = {};
        newObj['gender']=newData?.gender;
        newObj['phone']=newData?.phone;
        newObj['email']=newData?.email;
        newObj['name']=`${newData?.name?.title}. ${newData?.name?.first} ${newData?.name?.last}`;
        newObj['location']=newData?.location;
        setUser(newObj)
      });
  }, []);

  return (
    <section className="pt-16 bg-blueGray-50">
      <div className="w-full lg:w-4/12 px-4 mx-auto py-10">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6 py-10">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <img
                    alt="..."
                    src="https://randomuser.me/api/portraits/women/88.jpg"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                  />
                </div>
              </div>
            
            </div>
            <div className="text-center mt-12 pt-12">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                {user?.name}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                {user?.location?.city} , {user?.location?.country}
              </div>
              <div className="mb-2 text-blueGray-600 mt-10">
                <i className="fas fa fa-phone mr-2 text-lg text-blueGray-400" />
              {user?.phone}
              </div>    
              <div className="mb-2 text-blueGray-600 ">
                <i className="fas fa-envelope mr-2 text-lg text-blueGray-400" />
                {user?.email} 
              </div>
          
            </div>
      
          </div>
        </div>
      </div>
 
    </section>
  );
}

export default App;
