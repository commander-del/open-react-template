import React from 'react';
import Button from 'react-bootstrap/Button';



export const ContactForm = ({ onSubmit }) => {
    return (
        <section id="forms" className="py-3">
            <form name="sampleForm" method="POST" action="//1.altapotentia.com/products/crm/httphandlers/webtoleadfromhandler.ashx" acceptCharset="UTF-8">
                <meta content="text/html;charset=UTF-8" httpEquiv="content-type"/>
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="contactHeading">Contact Form</h1>
                        <div id="sampleFormPanel" role="form">
                            {/*first name*/}
                            <div className="form-group row">
                                    <input type="hidden" name="is_company" value="true"/>
                                    <label className="col-md-2 col-form-label form-control-label text-muted requiredField"> *First Name:</label>
                                    <div className="col-md-4">
                                        <input className="form-control" name="firstName" type="text" required=""/>
                                    </div>
                            </div>
                            {/*last name*/}
                            <div className="form-group row">
                                    <label className="col-md-1 col-form-label form-control-label text-muted requiredField"> *Last Name:</label>
                                    <div className="col-md-5">
                                        <input className="form-control" name="lastName" type="text" required=""/>
                                    </div>
                            </div>
                            {/*company name*/}
                            <div className="form-group row">
                                    <label className="col-md-2 col-form-label form-control-label text-muted requiredField"> *Company Name:</label>
                                    <input className="form-control" name="companyName" type="text" required=""/>
                            </div>
                            {/*company postion*/}
                            <div className="form-group row">
                                    <label className="col-md-1 col-form-label form-control-label text-muted"> Position:</label>
                                    <input className="form-control" name="jobTitle" type="text"/>
                            </div>
                            {/*phone*/}
                            <div className="form-group row">
                                    <label className="col-md-2 col-form-label form-control-label text-muted requiredField"> *Phone:</label>
                                    <input className="form-control" name="contactInfo_Phone_1" type="text" required=""/>
                            </div>
                            {/*email*/}
                            <div className="form-group row">
                                    <label className="col-md-2 col-form-label form-control-label text-muted requiredField"> *Email:</label>
                                    <input className="form-control" name="contactInfo_Email_1" type="text" required=""/>
                            </div>
                            {/*website*/}
                            <div className="form-group row">
                                <label className="col-md-2 col-form-label form-control-label text-muted"> Web site:</label>
                                <input className="form-control" name="contactInfo_Website_1" type="text"/>
                            </div>
                            {/*note*/}
                            <div className="form-group row">
                                <label className="col-md-2 col-form-label form-control-label text-muted"> Note:</label>
                                <input className="form-control" name="about" type="text"/>
                            </div>
                            {/*buttons */}
                            <div className="row justify-content-between">
                                <Button variant="Warning" value="Cancel" type="reset"  >Cancel</Button>{'  '}
                                <Button variant="success" value="Submit" type="submit"
                                       onClick="javascript: var isValid = true,
                                       form = document.getElementById('sampleFormPanel'),
                                       childs = form.getElementsByTagName('input'),
                                       isCompany = null,
                                       firstName = '',
                                       lastName = '',
                                       companyName = '',
                                       fieldName = '';
                                       for (var i = 0, n = childs.length; i < n; i++) {
                                           fieldName = childs[i].getAttribute('name');
                                           switch (fieldName) {
                                               case 'is_company': isCompany = childs[i].value.trim();
                                               break; case 'firstName': firstName = childs[i].value.trim();
                                               break; case 'lastName': lastName = childs[i].value.trim();
                                               break; case 'companyName': companyName = childs[i].value.trim();
                                               break;
                                           }
                                       }
                                       if (isCompany == 'false') {
                                           if (firstName == ''){
                                               if(typeof (toastr) === 'object' &amp;&amp;
                                               typeof (toastr.error) === 'function') toastr.error('Enter a first name');
                                               else alert('Enter a first name'); isValid = false;
                                            }
                                       }
                                       else if (isCompany == 'true') {
                                           if(companyName == '') {
                                               if(typeof (toastr) === 'object' &amp;&amp;
                                                typeof (toastr.error) === 'function') toastr.error('Enter a company name');
                                               else alert('Enter a company name'); isValid = false;
                                           }
                                       }
                                       else {isValid = false; }
                                       return isValid;">Submit</Button>
                                <input type="hidden" name="tag" value="Site Form Contact"/>
                                <input type="hidden" name="return_url" value="https://altapotentia.com"/>
                                <input type="hidden" name="web_form_key" value="5c5bfdf2-bd1b-401f-bc3e-e7f294c23c24"/>
                                <input type="hidden" name="notify_list" value="aec47da3-70c8-427d-a09c-5a7d18bbccff,d1e8a6b7-9620-4189-891c-e3d300b33b4c"/>
                                <input name="managers_list" type="hidden" value="aec47da3-70c8-427d-a09c-5a7d18bbccff,103d5141-1909-4c63-a8e1-4a21510158c8,0007743a-6e87-422c-8d49-1db4d7a4fddb,d1e8a6b7-9620-4189-891c-e3d300b33b4c"/>
                                <input type="hidden" name="share_type" value="0"/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>);
};
export default ContactForm;