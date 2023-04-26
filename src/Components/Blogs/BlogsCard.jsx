import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBBtn,
  MDBCol,
} from "mdb-react-ui-kit";

export default function BlogsCard() {
  return (
    <MDBRow className="row-cols-1 row-cols-md-3 g-4">
      <MDBCol>
        <MDBCard className="h-100" >
          <MDBCardImage
            src="https://images.pexels.com/photos/5560867/pexels-photo-5560867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="..."
            position="top"
            height="500px"
            
          />
          <MDBCardBody>
            <MDBCardTitle>
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            </MDBCardTitle>
            <MDBCardText>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odio eius exercitationem! Praesentium optio doloribus similique sunt officiis cumque inventore dignissimos necessitatibus rerum, aperiam reiciendis.</p>
              <p >Friday 10:00 AM</p>
            </MDBCardText>
            <MDBBtn href="#">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100" >
          <MDBCardImage
            src="https://images.pexels.com/photos/348489/pexels-photo-348489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="..."
            position="top"
            height="500px"
          ></MDBCardImage>
          <MDBCardBody>
            <MDBCardTitle>
              <h3>Lorem ipsum dolor, sit amet consectetur </h3>
            </MDBCardTitle>
            <MDBCardText>
              {" "}
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error provident consequatur dolorem sint necessitatibus. Numquam provident quaerat ullam veniam, culpa voluptate pariatur molestias quisquam ab incidunt obcaecati laborum </p>
              <p >Friday 10:00 AM</p>
            </MDBCardText>
            <MDBBtn href="#">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100" >
          <MDBCardImage
            src="https://images.pexels.com/photos/1656306/pexels-photo-1656306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="..."
            position="top"
            height="500px"
          />
          <MDBCardBody>
            <MDBCardTitle>
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            </MDBCardTitle>
            <MDBCardText>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsam quia odit dolorem a recusandae quaerat magni nihil perferendis quibusdam, dolores odio! Harum, tenetur corrupti.</p>
              <p>Friday 10:00 AM</p>
            </MDBCardText>
            <MDBBtn href="#">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100" >
          <MDBCardImage
            src="https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="..."
            position="top"
            height="500px"
          />
          <MDBCardBody>
            <MDBCardTitle>
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            </MDBCardTitle>
            <MDBCardText>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate et, soluta tempore, ea magnam tempora culpa ipsam consequuntur facilis saepe laudantium quidem, voluptatibus nostrum expedita.</p>
              <p>Friday 10:00 AM</p>
            </MDBCardText>
            <MDBBtn href="#">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100" >
          <MDBCardImage
            src="https://images.pexels.com/photos/35009/runner-marathon-military-afghanistan.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="..."
            position="top"
            height="500px"
          />
          <MDBCardBody>
            <MDBCardTitle>
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            </MDBCardTitle>
            <MDBCardText>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, neque beatae autem commodi vel possimus dicta labore amet! Tempora temporibus libero iure voluptate sequi modi.</p>
              <p>Friday 10:00 AM</p>
            </MDBCardText>
            <MDBBtn href="#">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100" >
          <MDBCardImage
            src="https://images.pexels.com/photos/8436760/pexels-photo-8436760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="..."
            position="top"
            height="500px"
          />
          <MDBCardBody>
            <MDBCardTitle>
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            </MDBCardTitle>
            <MDBCardText>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus possimus aspernatur praesentium et delectus eius similique architecto, quod incidunt alias, maxime sunt quia non labore.</p>
              <p>Friday 10:00 AM</p>
            </MDBCardText>
            <MDBBtn href="#">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100" >
          <MDBCardImage
            src="https://images.pexels.com/photos/4325462/pexels-photo-4325462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="..."
            position="top"
            height="500px"
          />
          <MDBCardBody>
            <MDBCardTitle>
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            </MDBCardTitle>
            <MDBCardText>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro aspernatur quis aperiam harum quas suscipit explicabo debitis recusandae enim quam, culpa doloremque iste vitae natus.</p>
              <p>Friday 10:00 AM</p>
            </MDBCardText>
            <MDBBtn href="#">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100" >
          <MDBCardImage
            src="https://images.pexels.com/photos/3822668/pexels-photo-3822668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="..."
            position="top"
            height="500px"
          />
          <MDBCardBody>
            <MDBCardTitle>
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            </MDBCardTitle>
            <MDBCardText>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo adipisci, aspernatur dolores quos nostrum voluptas blanditiis qui minima. Laborum sequi, magni praesentium earum vitae beatae.</p>
              <p>Friday 10:00 AM</p>
            </MDBCardText>
            <MDBBtn href="#">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100" >
          <MDBCardImage
            src="https://images.pexels.com/photos/1446563/pexels-photo-1446563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="..."
            position="top"
            height="500px"
          />
          <MDBCardBody>
            <MDBCardTitle>
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            </MDBCardTitle>
            <MDBCardText>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi, facilis provident numquam facere autem sapiente deserunt dicta quam, culpa cupiditate quibusdam laudantium neque magni?</p>
              <p>Friday 10:00 AM</p>
            </MDBCardText>
            <MDBBtn href="#">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
