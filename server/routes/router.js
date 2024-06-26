const express = require('express')
const router = express()

const services = require('../services/userrender')
const controller = require('../controller/user/userController')
const middleman = require('../../middleware/middleman')
const { route } = require('./adminRouter')

// Home page No route Only /
router.get('/',middleman.isBlocked,services.slashpage)

// Login page router
router.get('/login',middleman.backProfile,middleman.isBlocked,services.login)
router.post('/login',middleman.isBlocked,services.login)

// Logout 
router.get('/logout',controller.logout)

// Home page router
router.get('/home',middleman.isBlocked,services.home)
// SEARCH // 
// router.post('/search',controller.search)




// Register page router
router.get('/regiter',services.register)
// router.post('/regiter',services.register)

// OTP page router
router.get('/otppage',services.otppage)
// Resend otp 
router.get('/resendOtp',controller.resendOtp)

// Forgot page router
router.get('/forgetpage',services.forgetpage) 

// Reset password page router
router.get('/resetpassword',services.resetpassword)
// update previous Password
router.post('/updatePassword',controller.updatePassword)


// === SINGLE PRODUCT === //
router.get('/home/singleProduct',services.singleProduct)

// === HOME-CATEGORY-PRODUCTS === //
router.get('/home/category/products',services.categoryProducts)

// === USER PROFILE === //
router.get('/home/profile',middleman.isBlocked,services.userProfile)


// === ADDRESS MANAGEMENT === //
router.get('/profile/address_management',middleman.isBlocked,services.address_management)
// add address 
router.get('/address/add_address',middleman.isBlocked,services.add_address)
// Edit address
router.get('/address/edit-address',middleman.isBlocked,services.editAddress)
// Delete address
router.get('/address/delete-address',controller.deleteAddress)
// Select one address 
router.get('/address/select-address',controller.selectAddress)
//
router.get('/address/Unselectselect-address',controller.selectedToUnselect)


// === CART ==== // 
router.get('/cart',middleman.isBlocked,services.cartPage)
// Add to cart 
router.get('/productAddToCartdb',controller.productAddToCartdb) 
// Delete product from cart
router.get('/deleteCartItem',controller.deleteCartItem)
// cart quantity maintaining 
router.post('/api/updateCartQuantity',controller.updateCartQuantity) 

// === Check out === //
// Check out Page //
router.get('/cart/checkout',middleman.isBlocked,services.checkout)
// address change from Check out 
router.get('/selectAddressFromCheckout', controller.selectAddressInCheckout);
// Add address in checkout
router.post('/api/add-addressToCheckoutWay',controller.addaddressFromCheckout)
// Apply coupon
router.post('/applyCoupon',controller.applyCoupon)
// remove coupon 
router.get('/remove_coupon',controller.removeCoupon)
 

// === UPDATE PROFILE === //
// change user name
router.get('/profile/updateProfile',middleman.isBlocked,services.updateProfile)
// change password 
router.get('/profile/changePassword',middleman.isBlocked,services.changePassword)
// old password chacking 
router.post('/api/changePassword',controller.oldPasswordChecking)
// change password from profile After old password page
router.get('/profile/newPasswordUpdation',middleman.isBlocked,services.changePasswordFromProfile)
// update After user changed from update profile
router.post('/password/updatePasswordAfterChanged',controller.updatePasswordAfterChanged)


// === ORDER LIST === //

// Order Page
router.get('/orderList',middleman.isBlocked,services.orderList)
// order success page
router.get('/orderSuccessPage',middleman.isBlocked,services.orderSuccessPage)
// cancel Order
router.get('/api/cancelOrder',controller.cancelOrder)  
// return
router.post('/returnOrder',controller.return)
// order detail page 
router.get('/orderDetailPage',middleman.isBlocked,services.orderDetailPage)
// Return reason
// router.post('/returnReasonSave',controller.returnReasonSave)
// retry payment
router.post('/retryPayment',controller.retryPayment)

// posting route
router.post('/postingOrder',controller.postingOrder)
router.post('/ordersuccefull',controller.orderSuccessful)
// invoice
router.get('/invoice',controller.invoiceDownload)


// === WISH LIST === //
router.get('/wishlist',middleman.isBlocked,services.wishlist)
// home product to wishlist 
router.get('/home/addToWislist',controller.homeProductToWishlist)
// add to wish list from the single product page 
router.get('/addToWishlistFromSingleProduct',controller.addToWishlistFromSingleProduct)
// Delete wish list from wish list page 
router.get('/deleteWishlistItem',controller.deleteWishListFromWishlistPage)
// Add to cart from wishlist
router.get('/wishlistAddToCartdb',controller.wishlistAddToCartdb)


// ===== WALLET ===== // 
router.get('/wallet',middleman.isBlocked,services.wallet)
// Add money
router.post('/addWalletMoney',controller.addWalletMoney)
// successful 
router.post('/addedMoney',controller.addWalletMoneySuccessful)




//api

// Filter 
// router.post('/filter',controller.filter)

// router.post('/api/register',middleman.userCheck,controller.register)
router.post('/api/register',controller.register)

//  Otp page to Login page
router.post('/api/otpverify',controller.otpverify)
// Reset Password
router.post('/api/emailForResetPassword',controller.emailForResetPassword)

router.post('/api/h',controller.loginverification)
// ADDRESS //
// Add user address and save to db
router.post('/api/addaddress',controller.saveAddress) 
// submit edited address
router.post('/api/submitEdit_address',controller.updateAddress)

// === Profile updation === // 
router.post('/api/emailForUpdateProfile',controller.updateProfile)


// 500
router.get('/500',services.errorPage)

module.exports = router 


// router.get('/homey',services.homey) 
