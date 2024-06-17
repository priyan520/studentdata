var a = 0 , td = [];

evnthendler();

function evnthendler()
{
    for(var i = 0 ; i < data.department_data.length ; i++)
    {
        for(j = 0 ; j < data.department_data[i].year.length ; j++)
        {
            for(k = 0 ; k < data.department_data[i].year[j].student_data.length ; k++)
            {
                b=0;
                let tr = document.createElement("tr");
                tr.id = 'new'+a;
                document.getElementById('table').appendChild(tr);
    
                for(var z = 0 ; z < 13 ; z++)
                {
                    td[z] = document.createElement("td");
                    document.getElementById('new'+a).appendChild(td[z]);
                }
    
                for(key in data.department_data[i].year[j].student_data[k])
                {
                    td[b].innerHTML = data.department_data[i].year[j].student_data[k][key];
                    b++;
                }
    
                if(data.department_data[i].year[j].student_data[k].merit_12th != undefined)
                td[7].innerHTML = "Regular";
                else
                td[7].innerHTML = "D2D";
    
                td[8].innerHTML = data.collage_name;
                td[9].innerHTML = data.department_data[i].department;
                td[10].innerHTML = data.department_data[i].dep_head;
                td[11].innerHTML = data.department_data[i].year[j].year_head;
                td[12].innerHTML = data.department_data[i].year[j].year;
                
                a++;   
            }
        }
    };
}

function filter(val)
{
    var genderfil = document.getElementById("sel").options[document.getElementById("sel").selectedIndex].text;
    var depfil = document.getElementById("dep").options[document.getElementById("dep").selectedIndex].text;
    var year = document.getElementById("year").options[document.getElementById("year").selectedIndex].text;
    var ad_year = document.getElementById("ad_year").options[document.getElementById("ad_year").selectedIndex].text;
    var comp = document.getElementById("comp").options[document.getElementById("comp").selectedIndex].text;
    var merit = document.getElementById("merit").value;
    var met_cat = document.getElementById("met_cat").options[document.getElementById("met_cat").selectedIndex].text;

    // if(val = "Reset")
    // {
    //     genderfil = "All";
    //     depfil = "All";
    //     year = "All";
    //     ad_year = "All";
    //     comp = "All";
    //     merit = "";
    //     met_cat = "All";
    // }


    for(var i = 0 ; i < a ; i++)
    {
        document.getElementById("new"+i).remove();
    }

    a = 0;
    for(var i = 0 ; i < data.department_data.length ; i++)
    {
        for(j = 0 ; j < data.department_data[i].year.length ; j++)
        {
            for(k = 0 ; k < data.department_data[i].year[j].student_data.length ; k++)
            {
                if(data.department_data[i].year[j].student_data[k].gender == genderfil || genderfil == "All") 
                {  
                    if(data.department_data[i].department == depfil || depfil == "All")
                    {
                        if(data.department_data[i].year[j].year == year || year == "All")
                        {
                            if(data.department_data[i].year[j].student_data[k].admission_year == ad_year || ad_year == "All")
                            {
                                if(met_cat == "Regular" && data.department_data[i].year[j].student_data[k].merit_12th >= 0)
                                {
                                    if(comp == "Equle")
                                    {
                                        if(data.department_data[i].year[j].student_data[k].merit_12th == merit|| data.department_data[i].year[j].student_data[k].merit_diploma == merit)
                                        {
                                            b=0;
                                            let tr = document.createElement("tr");
                                            tr.id = 'new'+a;
                                            document.getElementById('table').appendChild(tr);
                                
                                            for(var z = 0 ; z < 13 ; z++)
                                            {
                                                td[z] = document.createElement("td");
                                                document.getElementById('new'+a).appendChild(td[z]);
                                            }
                                
                                            for(key in data.department_data[i].year[j].student_data[k])
                                            {
                                                td[b].innerHTML = data.department_data[i].year[j].student_data[k][key];
                                                b++;
                                            }
                                
                                            if(data.department_data[i].year[j].student_data[k].merit_12th != undefined)
                                            td[7].innerHTML = "Regular";
                                            else
                                            td[7].innerHTML = "D2D";
                                
                                            td[8].innerHTML = data.collage_name;
                                            td[9].innerHTML = data.department_data[i].department;
                                            td[10].innerHTML = data.department_data[i].dep_head;
                                            td[11].innerHTML = data.department_data[i].year[j].year_head;
                                            td[12].innerHTML = data.department_data[i].year[j].year;
                                            
                                            a++; 
                                        } 
                                    }
                                    else if(comp == "Greater >")
                                    {
                                        if(data.department_data[i].year[j].student_data[k].merit_12th >= merit || data.department_data[i].year[j].student_data[k].merit_diploma >= merit)
                                        {
                                            b=0;
                                            let tr = document.createElement("tr");
                                            tr.id = 'new'+a;
                                            document.getElementById('table').appendChild(tr);
                                
                                            for(var z = 0 ; z < 13 ; z++)
                                            {
                                                td[z] = document.createElement("td");
                                                document.getElementById('new'+a).appendChild(td[z]);
                                            }
                                
                                            for(key in data.department_data[i].year[j].student_data[k])
                                            {
                                                td[b].innerHTML = data.department_data[i].year[j].student_data[k][key];
                                                b++;
                                            }
                                
                                            if(data.department_data[i].year[j].student_data[k].merit_12th != undefined)
                                            td[7].innerHTML = "Regular";
                                            else
                                            td[7].innerHTML = "D2D";
                                
                                            td[8].innerHTML = data.collage_name;
                                            td[9].innerHTML = data.department_data[i].department;
                                            td[10].innerHTML = data.department_data[i].dep_head;
                                            td[11].innerHTML = data.department_data[i].year[j].year_head;
                                            td[12].innerHTML = data.department_data[i].year[j].year;
                                            
                                            a++;
                                        }  
                                    }
                                    else if(comp == "Less <")
                                    {
                                        if(data.department_data[i].year[j].student_data[k].merit_12th <= merit || data.department_data[i].year[j].student_data[k].merit_diploma <= merit)
                                        {
                                            b=0;
                                            let tr = document.createElement("tr");
                                            tr.id = 'new'+a;
                                            document.getElementById('table').appendChild(tr);
                                
                                            for(var z = 0 ; z < 13 ; z++)
                                            {
                                                td[z] = document.createElement("td");
                                                document.getElementById('new'+a).appendChild(td[z]);
                                            }
                                
                                            for(key in data.department_data[i].year[j].student_data[k])
                                            {
                                                td[b].innerHTML = data.department_data[i].year[j].student_data[k][key];
                                                b++;
                                            }
                                
                                            if(data.department_data[i].year[j].student_data[k].merit_12th != undefined)
                                            td[7].innerHTML = "Regular";
                                            else
                                            td[7].innerHTML = "D2D";
                                
                                            td[8].innerHTML = data.collage_name;
                                            td[9].innerHTML = data.department_data[i].department;
                                            td[10].innerHTML = data.department_data[i].dep_head;
                                            td[11].innerHTML = data.department_data[i].year[j].year_head;
                                            td[12].innerHTML = data.department_data[i].year[j].year;
                                            
                                            a++;  
                                        }
                                    }
                                    else
                                    {
                                        b=0;
                                        let tr = document.createElement("tr");
                                        tr.id = 'new'+a;
                                        document.getElementById('table').appendChild(tr);
                            
                                        for(var z = 0 ; z < 13 ; z++)
                                        {
                                            td[z] = document.createElement("td");
                                            document.getElementById('new'+a).appendChild(td[z]);
                                        }
                            
                                        for(key in data.department_data[i].year[j].student_data[k])
                                        {
                                            td[b].innerHTML = data.department_data[i].year[j].student_data[k][key];
                                            b++;
                                        }
                            
                                        if(data.department_data[i].year[j].student_data[k].merit_12th != undefined)
                                        td[7].innerHTML = "Regular";
                                        else
                                        td[7].innerHTML = "D2D";
                            
                                        td[8].innerHTML = data.collage_name;
                                        td[9].innerHTML = data.department_data[i].department;
                                        td[10].innerHTML = data.department_data[i].dep_head;
                                        td[11].innerHTML = data.department_data[i].year[j].year_head;
                                        td[12].innerHTML = data.department_data[i].year[j].year;
                                        
                                        a++;  
                                    }
                                }
                                else if(met_cat == "D2D" && data.department_data[i].year[j].student_data[k].merit_diploma >= 0)
                                {
                                    if(comp == "Equle")
                                    {
                                        if(data.department_data[i].year[j].student_data[k].merit_12th == merit|| data.department_data[i].year[j].student_data[k].merit_diploma == merit)
                                        {
                                            b=0;
                                            let tr = document.createElement("tr");
                                            tr.id = 'new'+a;
                                            document.getElementById('table').appendChild(tr);
                                
                                            for(var z = 0 ; z < 13 ; z++)
                                            {
                                                td[z] = document.createElement("td");
                                                document.getElementById('new'+a).appendChild(td[z]);
                                            }
                                
                                            for(key in data.department_data[i].year[j].student_data[k])
                                            {
                                                td[b].innerHTML = data.department_data[i].year[j].student_data[k][key];
                                                b++;
                                            }
                                
                                            if(data.department_data[i].year[j].student_data[k].merit_12th != undefined)
                                            td[7].innerHTML = "Regular";
                                            else
                                            td[7].innerHTML = "D2D";
                                
                                            td[8].innerHTML = data.collage_name;
                                            td[9].innerHTML = data.department_data[i].department;
                                            td[10].innerHTML = data.department_data[i].dep_head;
                                            td[11].innerHTML = data.department_data[i].year[j].year_head;
                                            td[12].innerHTML = data.department_data[i].year[j].year;
                                            
                                            a++; 
                                        } 
                                    }
                                    else if(comp == "Greater >")
                                    {
                                        if(data.department_data[i].year[j].student_data[k].merit_12th >= merit || data.department_data[i].year[j].student_data[k].merit_diploma >= merit)
                                        {
                                            b=0;
                                            let tr = document.createElement("tr");
                                            tr.id = 'new'+a;
                                            document.getElementById('table').appendChild(tr);
                                
                                            for(var z = 0 ; z < 13 ; z++)
                                            {
                                                td[z] = document.createElement("td");
                                                document.getElementById('new'+a).appendChild(td[z]);
                                            }
                                
                                            for(key in data.department_data[i].year[j].student_data[k])
                                            {
                                                td[b].innerHTML = data.department_data[i].year[j].student_data[k][key];
                                                b++;
                                            }
                                
                                            if(data.department_data[i].year[j].student_data[k].merit_12th != undefined)
                                            td[7].innerHTML = "Regular";
                                            else
                                            td[7].innerHTML = "D2D";
                                
                                            td[8].innerHTML = data.collage_name;
                                            td[9].innerHTML = data.department_data[i].department;
                                            td[10].innerHTML = data.department_data[i].dep_head;
                                            td[11].innerHTML = data.department_data[i].year[j].year_head;
                                            td[12].innerHTML = data.department_data[i].year[j].year;
                                            
                                            a++;
                                        }  
                                    }
                                    else if(comp == "Less <")
                                    {
                                        if(data.department_data[i].year[j].student_data[k].merit_12th <= merit || data.department_data[i].year[j].student_data[k].merit_diploma <= merit)
                                        {
                                            b=0;
                                            let tr = document.createElement("tr");
                                            tr.id = 'new'+a;
                                            document.getElementById('table').appendChild(tr);
                                
                                            for(var z = 0 ; z < 13 ; z++)
                                            {
                                                td[z] = document.createElement("td");
                                                document.getElementById('new'+a).appendChild(td[z]);
                                            }
                                
                                            for(key in data.department_data[i].year[j].student_data[k])
                                            {
                                                td[b].innerHTML = data.department_data[i].year[j].student_data[k][key];
                                                b++;
                                            }
                                
                                            if(data.department_data[i].year[j].student_data[k].merit_12th != undefined)
                                            td[7].innerHTML = "Regular";
                                            else
                                            td[7].innerHTML = "D2D";
                                
                                            td[8].innerHTML = data.collage_name;
                                            td[9].innerHTML = data.department_data[i].department;
                                            td[10].innerHTML = data.department_data[i].dep_head;
                                            td[11].innerHTML = data.department_data[i].year[j].year_head;
                                            td[12].innerHTML = data.department_data[i].year[j].year;
                                            
                                            a++;  
                                        }
                                    }
                                    else
                                    {
                                        b=0;
                                        let tr = document.createElement("tr");
                                        tr.id = 'new'+a;
                                        document.getElementById('table').appendChild(tr);
                            
                                        for(var z = 0 ; z < 13 ; z++)
                                        {
                                            td[z] = document.createElement("td");
                                            document.getElementById('new'+a).appendChild(td[z]);
                                        }
                            
                                        for(key in data.department_data[i].year[j].student_data[k])
                                        {
                                            td[b].innerHTML = data.department_data[i].year[j].student_data[k][key];
                                            b++;
                                        }
                            
                                        if(data.department_data[i].year[j].student_data[k].merit_12th != undefined)
                                        td[7].innerHTML = "Regular";
                                        else
                                        td[7].innerHTML = "D2D";
                            
                                        td[8].innerHTML = data.collage_name;
                                        td[9].innerHTML = data.department_data[i].department;
                                        td[10].innerHTML = data.department_data[i].dep_head;
                                        td[11].innerHTML = data.department_data[i].year[j].year_head;
                                        td[12].innerHTML = data.department_data[i].year[j].year;
                                        
                                        a++;  
                                    }  
                                }
                                else if(met_cat == "All")
                                {
                                    if(comp == "Equle")
                                    {
                                        if(data.department_data[i].year[j].student_data[k].merit_12th == merit|| data.department_data[i].year[j].student_data[k].merit_diploma == merit)
                                        {
                                            b=0;
                                            let tr = document.createElement("tr");
                                            tr.id = 'new'+a;
                                            document.getElementById('table').appendChild(tr);
                                
                                            for(var z = 0 ; z < 13 ; z++)
                                            {
                                                td[z] = document.createElement("td");
                                                document.getElementById('new'+a).appendChild(td[z]);
                                            }
                                
                                            for(key in data.department_data[i].year[j].student_data[k])
                                            {
                                                td[b].innerHTML = data.department_data[i].year[j].student_data[k][key];
                                                b++;
                                            }
                                
                                            if(data.department_data[i].year[j].student_data[k].merit_12th != undefined)
                                            td[7].innerHTML = "Regular";
                                            else
                                            td[7].innerHTML = "D2D";
                                
                                            td[8].innerHTML = data.collage_name;
                                            td[9].innerHTML = data.department_data[i].department;
                                            td[10].innerHTML = data.department_data[i].dep_head;
                                            td[11].innerHTML = data.department_data[i].year[j].year_head;
                                            td[12].innerHTML = data.department_data[i].year[j].year;
                                            
                                            a++; 
                                        } 
                                    }
                                    else if(comp == "Greater >")
                                    {
                                        if(data.department_data[i].year[j].student_data[k].merit_12th >= merit || data.department_data[i].year[j].student_data[k].merit_diploma >= merit)
                                        {
                                            b=0;
                                            let tr = document.createElement("tr");
                                            tr.id = 'new'+a;
                                            document.getElementById('table').appendChild(tr);
                                
                                            for(var z = 0 ; z < 13 ; z++)
                                            {
                                                td[z] = document.createElement("td");
                                                document.getElementById('new'+a).appendChild(td[z]);
                                            }
                                
                                            for(key in data.department_data[i].year[j].student_data[k])
                                            {
                                                td[b].innerHTML = data.department_data[i].year[j].student_data[k][key];
                                                b++;
                                            }
                                
                                            if(data.department_data[i].year[j].student_data[k].merit_12th != undefined)
                                            td[7].innerHTML = "Regular";
                                            else
                                            td[7].innerHTML = "D2D";
                                
                                            td[8].innerHTML = data.collage_name;
                                            td[9].innerHTML = data.department_data[i].department;
                                            td[10].innerHTML = data.department_data[i].dep_head;
                                            td[11].innerHTML = data.department_data[i].year[j].year_head;
                                            td[12].innerHTML = data.department_data[i].year[j].year;
                                            
                                            a++;
                                        }  
                                    }
                                    else if(comp == "Less <")
                                    {
                                        if(data.department_data[i].year[j].student_data[k].merit_12th <= merit || data.department_data[i].year[j].student_data[k].merit_diploma <= merit)
                                        {
                                            b=0;
                                            let tr = document.createElement("tr");
                                            tr.id = 'new'+a;
                                            document.getElementById('table').appendChild(tr);
                                
                                            for(var z = 0 ; z < 13 ; z++)
                                            {
                                                td[z] = document.createElement("td");
                                                document.getElementById('new'+a).appendChild(td[z]);
                                            }
                                
                                            for(key in data.department_data[i].year[j].student_data[k])
                                            {
                                                td[b].innerHTML = data.department_data[i].year[j].student_data[k][key];
                                                b++;
                                            }
                                
                                            if(data.department_data[i].year[j].student_data[k].merit_12th != undefined)
                                            td[7].innerHTML = "Regular";
                                            else
                                            td[7].innerHTML = "D2D";
                                
                                            td[8].innerHTML = data.collage_name;
                                            td[9].innerHTML = data.department_data[i].department;
                                            td[10].innerHTML = data.department_data[i].dep_head;
                                            td[11].innerHTML = data.department_data[i].year[j].year_head;
                                            td[12].innerHTML = data.department_data[i].year[j].year;
                                            
                                            a++;  
                                        }
                                    }
                                    else if(comp == "All")
                                    {
                                        b=0;
                                        let tr = document.createElement("tr");
                                        tr.id = 'new'+a;
                                        document.getElementById('table').appendChild(tr);
                            
                                        for(var z = 0 ; z < 13 ; z++)
                                        {
                                            td[z] = document.createElement("td");
                                            document.getElementById('new'+a).appendChild(td[z]);
                                        }
                            
                                        for(key in data.department_data[i].year[j].student_data[k])
                                        {
                                            td[b].innerHTML = data.department_data[i].year[j].student_data[k][key];
                                            b++;
                                        }
                            
                                        if(data.department_data[i].year[j].student_data[k].merit_12th != undefined)
                                        td[7].innerHTML = "Regular";
                                        else
                                        td[7].innerHTML = "D2D";
                            
                                        td[8].innerHTML = data.collage_name;
                                        td[9].innerHTML = data.department_data[i].department;
                                        td[10].innerHTML = data.department_data[i].dep_head;
                                        td[11].innerHTML = data.department_data[i].year[j].year_head;
                                        td[12].innerHTML = data.department_data[i].year[j].year;
                                        
                                        a++;  
                                    }
                                }
                            }
                        }    
                    }
                }
            }
        }
    };
}