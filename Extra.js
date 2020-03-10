d3.select("body")
    .selectAll("img","p")
    .data(employees)
    .enter()
    .append("img","p")
    .attr("src", function(employee)
          {return employee.photo}
          
          )