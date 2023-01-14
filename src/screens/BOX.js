import React from 'react'
import Box1 from '../components/box1'
import a1 from '../images/a1.png'
import a2 from '../images/a2.png'
function BOX() {
  return (
    <div>
        <Box1
heading="About Us"
content="We believe that achieving true gender equality requires a radical shift in the way young women are mentored in the workplace. At Girl Power Talk, we are passionately dedicated to empowering women–as well as men and nonbinary individuals–with opportunities to learn confidently, feel valued, and build a career full of purpose.

“Let’s unlock your potential. Welcome to Girl Power Talk.“"
position="right"
image={a1}
button="Learn more about us"
posi="left"
/> <br/><br/><br/><br/>
<Box1
heading="Vision"
content="Girl Power Talk is passionate about elevating young women to become global leaders who are recognized for their myriad of talents and contributions. We believe that through education, opportunity, and the support of empathetic male allies, girls and women will advance beyond gender roles, aspire to new levels of achievement and reshape our society. Through our innovative ecosystem, we are changing the world of work for the better and providing all voices equal weight in a new narrative defining the future."
position=""
images=""
button="see more"
posi="center"

/> 
<br/><br/><br/><br/>
<Box1 
heading="Starting a Movement"
content="Girl Power Talk was founded on the idea that young India needs an innovative new work culture that equally harnesses people’s talents, irrespective of their gender. Girl Power Talk is more than a company. We are a movement rooted in empowerment, professional ambition, and social impact. For generations, women have been relegated to secondary roles, and the youth exploited for their energy and inexperience. We are a culture that will make history by changing this dynamic and writing the beautiful next chapter in this story."
position="left"
image={a2}
button="Apply Now"
posi="right"

/>
<br/><br/><br/><br/>
   </div>
  )
}

export default BOX