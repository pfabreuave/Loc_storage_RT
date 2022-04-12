import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const Imprimir = ({teams,deleteTeam}) => { 
    
    return teams.map(team=>(
        
        <tr key={team.usergh}>
            <td><img src = {team.avatar} alt='imagen Avatar'/></td>
            <td>
                 <a  href= {'https://pfabreuave.github.io/api-github-javascript/?user=' + team.usergh} target='_blank' rel='noreferrer'>{team.usergh}</a>                    
            </td>
            <td>
                {team.email}
            </td>
            <td>
                {team.linkedin}                   
            </td>
            <td>
                 <a  href={'https://pfabreuave.github.io/API-Codewars-JS/?user=' + team.usercw} target='_blank' rel='noreferrer'>{team.usercw}</a>                    
            </td>
            <td className='delete-btn' onClick={()=>deleteTeam(team.usergh)}>
                <Icon icon={trash}/>
            </td> 
        </tr> 
        
        


   
))
}
