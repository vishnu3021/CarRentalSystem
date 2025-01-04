import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Cards from './Card'

export default function CarsData() {
    const cars = [
        // { type: "EV", brand: "Tesla", model: "Model 3", range: "358 miles", price: "₹1,600 per hour", image: "https://media.autoexpress.co.uk/image/private/s--w3mCgRM3--/v1565281565/autoexpress/2019/08/dsc_9204.jpg" },
        { type: "EV", brand: "Nissan", model: "Leaf", range: "212 miles", price: "₹1,200 per hour", image: "https://techcentral.co.za/wp-content/uploads/2019/01/new-nissan-leaf-2156-1120.jpg" },
        { type: "EV", brand: "Hyundai", model: "Kona Electric", range: "258 miles", price: "₹1,400 per hour", image: "https://s.yimg.com/uu/api/res/1.2/KYZCQr4UwXcIGKdkbLbboQ--~B/aD04MjE7dz0xMzQ0O2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-06/7e0539b0-f7ac-11ec-b1dd-b5d9be7acc28.cf.jpg" },
        { type: "Petrol", brand: "Toyota", model: "Corolla", engine: "1.8L", price: "₹800 per hour", image: "https://i.pinimg.com/originals/5c/3f/8d/5c3f8dfc6e397775855c478a712d3827.jpg" },
        { type: "Petrol", brand: "Honda", model: "Civic", engine: "2.0L", price: "₹900 per hour", image: "https://www.hdwallpapers.in/download/honda_civic_type_r_sport_line_4k_5k_hd_cars-2560x1440.jpg" },
        { type: "Diesel", brand: "BMW", model: "3 Series", engine: "2.0L", price: "₹2,000 per hour", image: "https://www.topgear.com/sites/default/files/2022/09/1-BMW-3-Series.jpg" },
        { type: "Diesel", brand: "Mercedes-Benz", model: "C-Class", engine: "2.1L", price: "₹2,200 per hour", image: "https://th.bing.com/th/id/OIP.44jE2Ds_DQPb4hjuiGQS-wHaEK?rs=1&pid=ImgDetMain" },
        { type: "EV", brand: "Tesla", model: "Model 3", range: "358 miles", price: "₹1,600 per hour", image: "https://i1.wp.com/www.motoringresearch.com/wp-content/uploads/2019/08/NOVITEC-T3-Pic01.jpg?resize=1500%2C844&ssl=1" },
        { type: "EV", brand: "Tesla", model: "Model Y", range: "330 miles", price: "₹1,800 per hour", image: "https://cdn.motor1.com/images/mgl/AMYRP/s1/tesla-model-y-gray-2.jpg" },
        { type: "EV", brand: "Tesla", model: "Model S", range: "405 miles", price: "₹2,200 per hour", image: "https://th.bing.com/th/id/OIP.JM5Dztr802dDb-MkDQ0aBwHaEh?w=1440&h=881&rs=1&pid=ImgDetMain" },
        { type: "EV", brand: "Nissan", model: "Leaf", range: "212 miles", price: "₹1,200 per hour", image: "https://wieck-nissanao-production.s3.amazonaws.com/photos/1724a5632ac6b8a9f7bfa184dc1063cb0ff2f190/preview-768x432.jpg" },
        { type: "EV", brand: "Hyundai", model: "Kona Electric", range: "258 miles", price: "₹1,400 per hour", image: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Features/hyundai-kona-advertorial-16.jpg&c=0" },
        { type: "EV", brand: "Kia", model: "EV6", range: "310 miles", price: "₹1,700 per hour", image: "https://th.bing.com/th/id/OIP.inkOoMaswCmsxiA_QwNvvAHaEK?rs=1&pid=ImgDetMain" },
        { type: "EV", brand: "Ford", model: "Mustang Mach-E", range: "305 miles", price: "₹1,900 per hour", image: "https://th.bing.com/th/id/OIP.520HyNfXLz38ah9zlrTWyQHaEK?rs=1&pid=ImgDetMain" },
        { type: "EV", brand: "Volkswagen", model: "ID.4", range: "280 miles", price: "₹1,500 per hour", image: "https://static.cargurus.com/images/forsale/2024/03/22/00/40/2024_volkswagen_id_4-pic-6004029042046129150-1024x768.jpeg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp" },
        { type: "EV", brand: "Audi", model: "e-tron", range: "222 miles", price: "₹2,400 per hour", image: "https://www.team-bhp.com/sites/default/files/pictures2021/2_153.jpg" },
        { type: "EV", brand: "Porsche", model: "Taycan", range: "225 miles", price: "₹3,000 per hour", image: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Features/20220927072447_Indiagate-Taycan.jpg&c=0" },
        { type: "EV", brand: "BMW", model: "i4", range: "300 miles", price: "₹2,200 per hour", image: "https://imgd.aeplcdn.com/642x361/n/cw/ec/115441/front-view3.jpeg?isig=0&q=75" },

    
        // Petrol Cars
        { type: "Petrol", brand: "Toyota", model: "Corolla", engine: "1.8L", price: "₹800 per hour", image: "https://th.bing.com/th/id/R.ed40f0cebe8894cda6622bde80849c45?rik=PA5OetvkeC1ACA&riu=http%3a%2f%2fcdni.autocarindia.com%2fExtraImages%2f20181027063821_corolla.jpg&ehk=Gm3P7PX0ZeJDvkaqJzYjrWPKJXyWo6MpvxIu5WiDvaQ%3d&risl=&pid=ImgRaw&r=0" },
        { type: "Petrol", brand: "Honda", model: "Civic", engine: "2.0L", price: "₹900 per hour", image: "https://www.conceptcarz.com/images/articleimages/honda-awards-civic-models-1-1024.jpg" },
        { type: "Petrol", brand: "Hyundai", model: "Elantra", engine: "2.0L", price: "₹850 per hour", image: "https://th.bing.com/th/id/OIP.DJBGAm2tMe1PhwXnIxMQDwHaFj?rs=1&pid=ImgDetMain" },
        { type: "Petrol", brand: "Mazda", model: "3", engine: "2.5L", price: "₹950 per hour", image: "https://th.bing.com/th/id/OIP.w5ERpQCoE75abqHUzv_j_gHaE8?rs=1&pid=ImgDetMain" },
        { type: "Petrol", brand: "Volkswagen", model: "Jetta", engine: "1.4L", price: "₹920 per hour", image: "https://s1.cdn.autoevolution.com/images/gallery/VOLKSWAGEN-Jetta-6210_6.jpg" },
        { type: "Petrol", brand: "Ford", model: "Mustang", engine: "5.0L", price: "₹1,800 per hour", image: "https://www.deansgarage.com/wp-content/uploads/Farrell-MachII-10.jpg" },
        { type: "Petrol", brand: "Chevrolet", model: "Camaro", engine: "3.6L", price: "₹1,700 per hour", image: "https://media.autoexpress.co.uk/image/private/s--UXT0SjNF--/t_content-image-full-desktop@2/v1563183368/autoexpress/1/75/2016-chevrolet-camaro-ss-002.jpg" },
        { type: "Petrol", brand: "BMW", model: "M3", engine: "3.0L", price: "₹2,500 per hour", image: "https://ssl.caranddriving.com/f2/images/new/big/bmwm3competition0321(4).jpg" },
        { type: "Petrol", brand: "Mercedes", model: "A-Class", engine: "2.0L", price: "₹1,800 per hour", image: "https://www.topgear.com/sites/default/files/images/news-article/carousel/2018/02/d79ca46616f85d13ee39083599c5e583/17c833_086.jpg" },
        // { type: "Petrol", brand: "Audi", model: "A4", engine: "2.0L", price: "₹2,000 per hour", image: "/api/placeholder/400/300" },
        // { type: "Petrol", brand: "Lexus", model: "IS", engine: "2.5L", price: "₹1,900 per hour", image: "/api/placeholder/400/300" },
        // { type: "Petrol", brand: "Infiniti", model: "Q50", engine: "3.0L", price: "₹1,800 per hour", image: "/api/placeholder/400/300" },
        // { type: "Petrol", brand: "Acura", model: "TLX", engine: "2.0L", price: "₹1,700 per hour", image: "/api/placeholder/400/300" },
        // { type: "Petrol", brand: "Subaru", model: "WRX", engine: "2.4L", price: "₹1,600 per hour", image: "/api/placeholder/400/300" },
        // { type: "Petrol", brand: "Porsche", model: "911", engine: "3.0L", price: "₹3,500 per hour", image: "/api/placeholder/400/300" },
        // { type: "Petrol", brand: "Kia", model: "K5", engine: "1.6L", price: "₹900 per hour", image: "/api/placeholder/400/300" },
        // { type: "Petrol", brand: "Nissan", model: "Maxima", engine: "3.5L", price: "₹1,200 per hour", image: "/api/placeholder/400/300" },
        // { type: "Petrol", brand: "Genesis", model: "G70", engine: "2.0L", price: "₹1,800 per hour", image: "/api/placeholder/400/300" },
        // { type: "Petrol", brand: "Alfa Romeo", model: "Giulia", engine: "2.0L", price: "₹2,000 per hour", image: "/api/placeholder/400/300" },
        // { type: "Petrol", brand: "Cadillac", model: "CT5", engine: "2.0L", price: "₹2,100 per hour", image: "/api/placeholder/400/300" },
    
        // Diesel Cars
        { type: "Diesel", brand: "BMW", model: "3 Series", engine: "2.0L", price: "₹2,000 per hour", image: "https://th.bing.com/th/id/OIP.iZMnKzh4a-7_c2ueybuFIAHaFj?rs=1&pid=ImgDetMain" },
        { type: "Diesel", brand: "Mercedes", model: "C-Class", engine: "2.1L", price: "₹2,200 per hour", image: "https://th.bing.com/th/id/OIP.Uz8aNKxg2SxbMvNsrBSG9wHaE8?rs=1&pid=ImgDetMain" },
        { type: "Diesel", brand: "Audi", model: "A6", engine: "3.0L", price: "₹2,400 per hour", image: "https://s1.cdn.autoevolution.com/images/news/gallery/audi-announces-us-spec-competition-models-a6-starts-at-67600_1.jpg" },
        { type: "Diesel", brand: "Volkswagen", model: "Passat", engine: "2.0L", price: "₹1,500 per hour", image: "https://www.motoringresearch.com/wp-content/uploads/2014/10/01_VW_Passat_2015-1.jpg" },
        { type: "Diesel", brand: "Land Rover", model: "Discovery", engine: "3.0L", price: "₹2,800 per hour", image: "https://media.evo.co.uk/image/private/s--LQaFLB48--/v1604939877/evo/2020/11/LR_DISCO_21MY_DYNAMIC_101120_01.jpg" },
        { type: "Diesel", brand: "Volvo", model: "XC60", engine: "2.0L", price: "₹2,300 per hour", image: "https://s1.cdn.autoevolution.com/images/gallery/VOLVO-XC60-5063_18.jpg" },
        { type: "Diesel", brand: "Jaguar", model: "XF", engine: "2.0L", price: "₹2,500 per hour", image: "https://th.bing.com/th/id/OIP.u-DV0nOyqXDtQwt8xV079QHaEo?rs=1&pid=ImgDetMain" },
        { type: "Diesel", brand: "Toyota", model: "Fortuner", engine: "2.8L", price: "₹1,800 per hour", image: "https://img-ik.cars.co.za/news-site-za/images/2016/03/SPP6343Resize.jpg?tr=w-1200,h-800" },
        // { type: "Diesel", brand: "Ford", model: "Ranger", engine: "2.0L", price: "₹1,600 per hour", image: "/api/placeholder/400/300" },
        // { type: "Diesel", brand: "Hyundai", model: "Santa Fe", engine: "2.2L", price: "₹1,700 per hour", image: "/api/placeholder/400/300" },
        // { type: "Diesel", brand: "Kia", model: "Sorento", engine: "2.2L", price: "₹1,800 per hour", image: "/api/placeholder/400/300" },
        // { type: "Diesel", brand: "Peugeot", model: "3008", engine: "1.5L", price: "₹1,400 per hour", image: "/api/placeholder/400/300" },
        // { type: "Diesel", brand: "Citroen", model: "C5", engine: "2.0L", price: "₹1,500 per hour", image: "/api/placeholder/400/300" },
        // { type: "Diesel", brand: "Skoda", model: "Kodiaq", engine: "2.0L", price: "₹1,600 per hour", image: "/api/placeholder/400/300" },
        // { type: "Diesel", brand: "Jeep", model: "Cherokee", engine: "2.0L", price: "₹2,000 per hour", image: "/api/placeholder/400/300" },
        // { type: "Diesel", brand: "Mitsubishi", model: "Pajero", engine: "2.4L", price: "₹1,900 per hour", image: "/api/placeholder/400/300" },
        // { type: "Diesel", brand: "Isuzu", model: "D-Max", engine: "1.9L", price: "₹1,400 per hour", image: "/api/placeholder/400/300" },
        // { type: "Diesel", brand: "Mahindra", model: "XUV700", engine: "2.2L", price: "₹1,300 per hour", image: "/api/placeholder/400/300" },
        // { type: "Diesel", brand: "Tata", model: "Safari", engine: "2.0L", price: "₹1,200 per hour", image: "/api/placeholder/400/300" },
        // { type: "Diesel", brand: "MG", model: "Gloster", engine: "2.0L", price: "₹1,800 per hour", image: "/api/placeholder/400/300" }
    
    ];
      const [filteredCars,setFilteredCars] = useState(cars);
      const filterCars=(type)=>{
        if(type === "All"){
            setFilteredCars(cars);
        }
        else{
            const filtered = cars.filter((car)=>
                car.type ===  type);
            setFilteredCars(filtered);
        }
      }
  return (
    <div>
        <div style={{display:"flex", justifyContent:"space-around" , margin:"0.9em", backgroundColor:"black"}}> 
        <Button variant="primary" size='lg' onClick={()=>{filterCars("All")}}>ALL</Button>
        <Button variant="secondary" size='lg' onClick={()=>{filterCars("Petrol")}}>Petrol</Button>
        <Button variant="success" size='lg' onClick={()=>{filterCars("Diesel")}}>Diesel</Button>
        <Button variant="warning" size='lg' onClick={()=>{filterCars("EV")}}>EV</Button>
        </div>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around" , marginTop:"1em", gap:"5em"}}>
            {filteredCars.map((cars,index)=>{
                return(
                    <div key={index}>
                        <Cards image={cars.image} brand={cars.brand} model={cars.model} type={cars.type}/>
                        </div>
                )
            })}
        </div>
      
    </div>
  )
}
