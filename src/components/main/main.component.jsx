import React, {Fragment} from 'react';
import './main.styles.scss';
import { Switch, Route } from 'react-router-dom';
import MainContent from '../main-content/main-content.component';

function Main({data}) {
    return (
        <main className="main">
            <Switch>
                <Route exact path='/'>Main</Route>
                {data.map(chapter => {
                    const topics = chapter.topics;
                    return (
                    <Fragment>
                        {topics.map(page => {
                            return (
                                <Route path={page.url}>{console.log(page.url)}
                                    <MainContent title={page.title} folder={page.folder} content={page.content} />
                                </Route>
                            )
                        })}
                    </Fragment>)                    
                })

                }
                
            </Switch>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat blandit aliquam etiam erat. Urna nunc id cursus metus aliquam eleifend. Congue eu consequat ac felis donec et odio. Urna condimentum mattis pellentesque id nibh. Bibendum enim facilisis gravida neque convallis a cras. Quam nulla porttitor massa id. Vitae sapien pellentesque habitant morbi tristique senectus. Lacus sed turpis tincidunt id aliquet risus. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Odio tempor orci dapibus ultrices. In cursus turpis massa tincidunt dui. Vestibulum sed arcu non odio. Vestibulum lorem sed risus ultricies tristique. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Dignissim convallis aenean et tortor at risus. Ultricies leo integer malesuada nunc. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Sit amet consectetur adipiscing elit ut aliquam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat blandit aliquam etiam erat. Urna nunc id cursus metus aliquam eleifend. Congue eu consequat ac felis donec et odio. Urna condimentum mattis pellentesque id nibh. Bibendum enim facilisis gravida neque convallis a cras. Quam nulla porttitor massa id. Vitae sapien pellentesque habitant morbi tristique senectus. Lacus sed turpis tincidunt id aliquet risus. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Odio tempor orci dapibus ultrices. In cursus turpis massa tincidunt dui. Vestibulum sed arcu non odio. Vestibulum lorem sed risus ultricies tristique. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Dignissim convallis aenean et tortor at risus. Ultricies leo integer malesuada nunc. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Sit amet consectetur adipiscing elit ut aliquam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat blandit aliquam etiam erat. Urna nunc id cursus metus aliquam eleifend. Congue eu consequat ac felis donec et odio. Urna condimentum mattis pellentesque id nibh. Bibendum enim facilisis gravida neque convallis a cras. Quam nulla porttitor massa id. Vitae sapien pellentesque habitant morbi tristique senectus. Lacus sed turpis tincidunt id aliquet risus. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Odio tempor orci dapibus ultrices. In cursus turpis massa tincidunt dui. Vestibulum sed arcu non odio. Vestibulum lorem sed risus ultricies tristique. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Dignissim convallis aenean et tortor at risus. Ultricies leo integer malesuada nunc. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Sit amet consectetur adipiscing elit ut aliquam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat blandit aliquam etiam erat. Urna nunc id cursus metus aliquam eleifend. Congue eu consequat ac felis donec et odio. Urna condimentum mattis pellentesque id nibh. Bibendum enim facilisis gravida neque convallis a cras. Quam nulla porttitor massa id. Vitae sapien pellentesque habitant morbi tristique senectus. Lacus sed turpis tincidunt id aliquet risus. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Odio tempor orci dapibus ultrices. In cursus turpis massa tincidunt dui. Vestibulum sed arcu non odio. Vestibulum lorem sed risus ultricies tristique. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Dignissim convallis aenean et tortor at risus. Ultricies leo integer malesuada nunc. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Sit amet consectetur adipiscing elit ut aliquam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat blandit aliquam etiam erat. Urna nunc id cursus metus aliquam eleifend. Congue eu consequat ac felis donec et odio. Urna condimentum mattis pellentesque id nibh. Bibendum enim facilisis gravida neque convallis a cras. Quam nulla porttitor massa id. Vitae sapien pellentesque habitant morbi tristique senectus. Lacus sed turpis tincidunt id aliquet risus. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Odio tempor orci dapibus ultrices. In cursus turpis massa tincidunt dui. Vestibulum sed arcu non odio. Vestibulum lorem sed risus ultricies tristique. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Dignissim convallis aenean et tortor at risus. Ultricies leo integer malesuada nunc. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Sit amet consectetur adipiscing elit ut aliquam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat blandit aliquam etiam erat. Urna nunc id cursus metus aliquam eleifend. Congue eu consequat ac felis donec et odio. Urna condimentum mattis pellentesque id nibh. Bibendum enim facilisis gravida neque convallis a cras. Quam nulla porttitor massa id. Vitae sapien pellentesque habitant morbi tristique senectus. Lacus sed turpis tincidunt id aliquet risus. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Odio tempor orci dapibus ultrices. In cursus turpis massa tincidunt dui. Vestibulum sed arcu non odio. Vestibulum lorem sed risus ultricies tristique. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Dignissim convallis aenean et tortor at risus. Ultricies leo integer malesuada nunc. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Sit amet consectetur adipiscing elit ut aliquam.</p> */}
        </main>
    )
}

export default Main;