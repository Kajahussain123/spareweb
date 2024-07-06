import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import NavbarComponent from '../Components/Navbar';

const PrivacyPolicy = () => {
  return (
    <div>
        <NavbarComponent />
        <Container className='mt-5'>
          <Typography variant="h4" gutterBottom>
            Spare Parts Privacy Policy
          </Typography>
          <Typography variant="body1" gutterBottom>
            <b>Last updated June 29th, 2024</b>
          </Typography>
          <Typography variant="body1" gutterBottom>
            SparePartsShop.com, Inc. (Spare Parts Shop) considers the privacy and security of user information an important component of the service offered at its website, www.sparepartsshop.com (Site). The following information explains how Spare Parts Shop collects and uses information obtained from its registered users in connection with services available at the Site (taken together, the Service).
          </Typography>
          <Typography variant="h5" gutterBottom>
            What this Policy Covers.
          </Typography>
          <Typography variant="body1" gutterBottom>
            This Policy covers Spare Parts Shop's treatment of personal information that Spare Parts Shop gathers when you are on the Site and when you use the Service. Also, this Policy covers Spare Parts Shop's treatment of personal information that Spare Parts Shop’s business partners share with Spare Parts Shop. This policy does not apply to the practices of companies that Spare Parts Shop does not own or control, or to individuals that Spare Parts Shop does not employ or manage.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Personal Information Collected and How We Use It.
          </Typography>
          <Typography variant="body1" gutterBottom>
            In order to provide registered users with a friendly, customized, and efficient experience, we collect personal information of several types. We only collect personal information that is relevant to the purpose of the Service. We do not use this information in a way that is incompatible with the purpose for which it has been collected unless you have expressly authorized such use.
          </Typography>
          <Typography variant="h6" gutterBottom>
            A) Information You Provide to Us:
          </Typography>
          <Typography variant="body1" gutterBottom>
            We may receive and store information you enter on the Site or otherwise provide to us, including information that is added to the Site as a result of back-office integration with our suppliers. You can choose not to provide us with (or prevent us from receiving) certain personal information, but this will prevent your access to special features that comprise the Service. The personal information you provide may be used for such purposes as responding to your requests for certain information and products and services, customizing the advertising and content you see, and communicating with you about the Service.
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="1. Registration:" secondary="In order for you to use certain features of the Service, you may be required to complete a registration form. As part of this registration form, you must provide your name and your email address." />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="2. Order Information:"
                secondary={
                  <>
                    <Typography variant="body2">
                      As a registered member of Spare Parts Shop, you can place orders and manage your order history. All of the order pages on Spare Parts Shop use Secure Sockets Layer (SSL) encryption to protect your personal information. Examples of the types of information stored in your Spare Parts Shop order records include:
                    </Typography>
                    <ul>
                      <li>Personal information including your name, address and contact information</li>
                      <li>Order details such as product names, quantities, and prices</li>
                      <li>Payment information including credit card details and billing addresses</li>
                      <li>Shipping information including recipient names, addresses, and contact numbers</li>
                      <li>Order history and status updates</li>
                    </ul>
                  </>
                }
              />
            </ListItem>
          </List>
        </Container>
    </div>
  );
};

export default PrivacyPolicy;
