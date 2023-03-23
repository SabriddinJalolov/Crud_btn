import React from "react";
import Button from "../Button /Button"



function Crud(){
    const [product,setProduct] = React.useState([])
    const [selectedIndex,setselectedIndex] = React.useState(-1)
    const addProduct=(evt)=>{
        evt.preventDefault();

        const [prodectName, prodectPrice,prodectWeight] = evt.target.elements;

        console.log(prodectName, prodectPrice, prodectWeight)



        const newProduc={
            name: prodectName.value,
            price: prodectPrice.value,
            weight: prodectWeight.value



        }

        if(selectedIndex>=0){
            product[selectedIndex]=newProduc;
            setselectedIndex(-1);

        }else{
            product.push(newProduc);
        }

        product.push();
        
         setProduct([...product]);
            

        evt.target.reset();
    };

    const deleteProduct =(index)=>{
        product.splice(index, 1);

        setProduct([...product]);

    }
    const editProduct =(index)=>{
        setselectedIndex(index);

    }

    return <div className="row">
        <div className="col-3 my-5">
            <div className="card">
                <div className="card-header">
                    <h3 className="text-center">CRUD FORM</h3>
                </div>
                <div className="cart-body">
                    <form onSubmit={(evt)=> addProduct(evt)} method="POST">
                        <input
                        className="form-control mb-3"
                        name="prodectName" 
                        type="text"
                        defaultValue={product[setselectedIndex]?.name}
                        placeholder="Product name" 
                        />

                        <input
                        className="form-control mb-3"
                        name="prodectPrice" 
                        type="number"
                        defaultValue={product[setselectedIndex]?.price}
                        placeholder="Product price" 
                        />
                          <input
                        className="form-control mb-3"
                        name="prodectWeight" 
                        type="number"
                        defaultValue={product[setselectedIndex]?.weight}
                        placeholder="Product weight" 
                        />
                        <div className="d-grid">
                        <Button type="submit" text="Add" color="success"/>
                        </div>

                    </form>
                </div>
            </div>
        </div>


        <div className="col-9 my-5">
            <div className="row">
                {product.map((produ,index)=>(
                    <div className="col-4 mb-3"key={index}>
                        <div className="card">
                            <div className="card-header">
                                <h3 className="text-center">{produ.name}</h3>
                            </div>
                            <div className="cart-body">
                                <strong>Price{produ.price}</strong>
                                <p>Weight{produ.weight}</p>
                            </div>

                            <div className="card-footer d-flex">

                            <Button text="Delete" color="danger" 
                            deleteProduct={()=>
                            deleteProduct(index)
                            }/>
                            
                            <button
                                className='btn btn-primary'
                                type='button'
                                onClick={() => editProduct(index)}
                            >
                                Edit
                            </button>


                            </div>
                        </div>
                    </div>

                ))}
            </div>



        </div>

    </div>

    
}

export default Crud;