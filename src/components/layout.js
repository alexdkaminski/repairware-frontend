import React from "react";
import Nav from './nav'
import Header from './header'
import Button from './Button'

const Layout = ({ 
  pageTitle, 
  primaryButtonLabel, 
  primaryButtonLabelAlt, 
  primaryButtonAction, 
  secondaryButtonLabel,  
  secondaryButtonLabelAlt, 
  secondaryButtonAction, 
  children 
  }) => {

  return (
    <>
      <div>
        <div className="bg-gray-800 pb-32">
          <Nav/>
          <Header pageTitle={pageTitle}>
            { secondaryButtonAction && secondaryButtonLabel &&
              <div className="px-2">
                <Button 
                  buttonLabel={secondaryButtonLabel} 
                  buttonLabelAlt={secondaryButtonLabelAlt} 
                  buttonAction={secondaryButtonAction}
                  type="secondary"
                />
              </div>
            }
            { primaryButtonAction && primaryButtonLabel &&
              <Button 
                buttonLabel={primaryButtonLabel} 
                buttonLabelAlt={primaryButtonLabelAlt} 
                buttonAction={primaryButtonAction}
                type="primary"
              />
            }
          </Header>
        </div>

        <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
              <div className="rounded-lg">
                { children }
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
};

export default Layout