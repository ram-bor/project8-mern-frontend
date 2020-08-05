import React from 'react'
import CatalogueHeader from './CatalogueHeader'
import CatalogueDetail from './CatalogDetail'
import ItemForm from './ItemForm'
import { Route } from 'react-router-dom'
import CatalogueSidebar from './CatalogueSidebar'
import './CatalogueSidebar.css'

function Catalogue() {


    return (
        <div className="catalogue-main">

            <CatalogueHeader />
            <Route path="/catalog"
                render={() => {
                    return (<div className="catalogue-body">
                        <div className="catalogue-sidebar" style={{ marginLeft: "10px", marginRight: "20px" }}>
                            <CatalogueSidebar />
                        </div>
                        <CatalogueDetail />
                    </div>)
                }}
                exact />
            <Route path="/catalog/item/new"
                render={() => {
                    return (<div className="item-form-body">
                        <ItemForm />
                    </div>)
                }}
                exact />
        </div>
    )
}

export default Catalogue
