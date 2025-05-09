import React from 'react'
import Card from '../components/UI/Card'
import PageTitle from '../components/UI/PageTitle'
import Blogs from '../components/Blog/Blogs'
import Map from '../components/Contact/Map'

const HomePage = () => {
  return (
    <div>
      <PageTitle title={"homepage"}/>
      <img src="https://picsum.photos/1200/600" className="img-fluid" alt="..."/>
      <div className="container d-flex flex-wrap gap-5 justify-content-between">
        <Blogs/>
        <Card classes={"bg-secondary"}/>
        <Card classes={"bg-danger"}/>
        <Card classes={"bg-info"}/>
        <Card classes={"bg-secondary"}/>
        <Card classes={"bg-success"}/>
        <Card classes={"bg-warning"}/>
        <Card classes={"bg-dark text-light"}/>
        <Card classes={"bg-light"}/>
        <Map/>
      </div>
    </div>
  )
}

export default HomePage
