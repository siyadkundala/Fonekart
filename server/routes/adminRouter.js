

const express = require('express')
const adminRouter = express()
const services = require('../services/adminRender')
const controller = require('../controller/admin/adminController')
const store = require('../controller/admin/multer')
const middle = require('../../middleware/middleman')


// login page 
adminRouter.get('/adminlogin',services.login)
// log out
adminRouter.get('/adminLogout',controller.logout)
// login page verification
adminRouter.post('/api/adminlogin',controller.verifylogin)

// home page 
adminRouter.get('/adminhome',middle.isAdminAuth,services.home)
// chart post route
adminRouter.post('/admin/chartData',controller.getDetailsChart)

// SALES REPORT------------------------------------------------------------------------
// daily
adminRouter.get('/dailyReportPreview',middle.isAdminAuth,services.dailyReport)
// preview page 
adminRouter.get('/dailyReportDownload',controller.dailyReport)

// weekly
adminRouter.get('/weeklyReportDownload',controller.weeklyReport)
// preview page 
adminRouter.get('/weeklyReportPreview',middle.isAdminAuth,services.weeklyReport)

// yearly 
adminRouter.get('/yearlyReportDownload',controller.yearlyReport)
// preview page
adminRouter.get('/yearlyReportPreview',middle.isAdminAuth,services.yearlyReport)

// costome date sales report
adminRouter.post('/costomeDateSalesReport',controller.customDateSales)

     

// PRODUCT MANAGEMENT--------------------------------------------------------------------
// Product management page
adminRouter.get('/product_management',middle.isAdminAuth,services.product_management)
// Add product page
adminRouter.get('/product/add-product',middle.isAdminAuth,services.add_product)
// Edit product page
adminRouter.get('/product/edit-product',middle.isAdminAuth,services.edit_product)
// delete products 
adminRouter.get('/product/delete-product',middle.isAdminAuth,services.deleteToUnlist) 

// Peoduct  API
// add product
adminRouter.post('/api/addproduct',store.array('file',4),controller.add_product) 
// submit edited product details
adminRouter.post('/api/submitEdit_product',store.array('file',4),controller.submitEdit_product)
// delete product
adminRouter.get('/product/delete-products',controller.deleteproduct)
// Unlist to product
adminRouter.get('/unlistToProduct',controller.unlistToProduct)
// image seperate delete while editing
adminRouter.get('/imageDeleteSeperate',controller.imageDeleteSeperate)


// USER_MANAGEMENT -------------------------------------------------------------------------
// user management page 
adminRouter.get('/User_management',middle.isAdminAuth,services.User_management)
// block and unblock 
adminRouter.post('/adminUserStatus/block',controller.blockUser)
adminRouter.post('/adminUserStatus/unblock',controller.unblockUser)


// Order_management page
adminRouter.get('/Order_management',middle.isAdminAuth,services.Order_management)
// update order status 
adminRouter.post('/api/updateOrderStatus',controller.updateOrderStatus)
// Order Detail page 
adminRouter.get('/orderDetailPageAdmin',controller.orderDetail)


// CATEGORY MANAGEMENT------------------------------------------------------------------
// Categary_management
adminRouter.get('/Categary_management',middle.isAdminAuth,services.Categary_management)
// Add-category page
adminRouter.get('/category/add-category',middle.isAdminAuth,services.add_category) 
// Edit category
adminRouter.get('/category/edit-category',middle.isAdminAuth,services.edit_category)
// Delete category
adminRouter.get('/category/unlisted-category',middle.isAdminAuth,services.deletecategory)


// COUPON MANAGEMENT ---------------------------------------------------------------------
// Coupon_management
adminRouter.get('/Coupon_management',middle.isAdminAuth,services.Coupon_management)
// add coupon page 
adminRouter.get('/addCoupon',middle.isAdminAuth,services.addCoupon)
// Save add coupon data to db
adminRouter.post('/saveToCouponDb',controller.saveToCouponDb)
// Delete coupon
adminRouter.get('/deleteCoupon',controller.deleteCoupon)
// Edit Coupon Page
adminRouter.get('/EditCoupon',middle.isAdminAuth,services.editCoupon)
// Save Editted Coupon
adminRouter.post('/api/EditCoupon',controller.submitEditedCoupon)


// OFFER MANAGEMENT ----------------------------------------------------------------------
adminRouter.get('/Offer_management',middle.isAdminAuth,services.Offer_management)
// add category offer
adminRouter.get('/addCategoryOffer',middle.isAdminAuth,services.addCategoryOffer) 
// Save category offer 
adminRouter.post('/saveToOfferOfCategory',controller.saveToOfferOfCategory)
// Add product offer
adminRouter.get('/addProductOffer',middle.isAdminAuth,services.productOffer)
// save product offer
adminRouter.post('/saveProductOffer',controller.saveToOfferOfProduct)
// Delete offer
adminRouter.get('/deleteOffer',controller.deleteOffer)


// CATEGORY MANAGEMENT ----------------------------------------------------------------------
// Add category file upload
adminRouter.post('/api/addcategory',store.array('file',1),controller.categoryAdd)
// edit category
// adminRouter.post('/api/editcategory',controller.edit_category)
// update edited category deteils 
adminRouter.post('/api/submitEdit_category',store.array('file',1),controller.submitEdit_category) 
// delete a category
adminRouter.get('/category/delete-category',controller.deletecategory)
// Unlist to category
adminRouter.get('/unlistToCategory',controller.unlistToCategory)



// REFFEREL OFFER ---------------------------------------------------------------------------
// refferal offer page admin
adminRouter.get('/refferalOffer',middle.isAdminAuth,services.refferalOffer)
// Add refferal offer
adminRouter.get('/adddRefferalOffer',middle.isAdminAuth,services.addRefferalOffer)
// save refferel
adminRouter.post('/saveRefferal',controller.saveRefferal)
// Delete Refferal 
adminRouter.get('/deleteRefferal',controller.deleteRefferal)


// axios

// adminRouter.get('/admin/findUserManagment',controller.findUser)



module.exports = adminRouter
