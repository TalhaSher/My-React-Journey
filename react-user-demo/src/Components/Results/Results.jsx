const Results = ({ data,key }) => {
    
  return (
    <>
      {data.map((inf) => (
        <div key={key} className="result" >
            <h3>{inf.username} ({inf.age} years old)</h3>
        </div>
      ))}
    </>
  );
};

export default Results;
