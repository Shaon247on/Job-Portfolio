"use client"
const TabContent = ({ category, projects }) => {


    return (
        <div className="grid lg:grid-cols-3 gap-11 items-center">
            {/* {filteredProjects.map((item, index) => (
          <div key={index}>
            <Image src={item.Image} alt={item.Name} width={100} height={50} />
            <p>{item.Name}</p>
            <p>{item.Category}</p>
            <h1>{item.Name}</h1>
          </div>
        ))} */}
            <div>
                {/* <h1>{projects.Name}</h1>
                <h1>{data1.Name}</h1>
                <h1>{data2.Name}</h1>
                <h1>{data3.Name}</h1>
                <h1>{data4.Name}</h1> */}
            </div>
        </div>
    );
};

export default TabContent;
