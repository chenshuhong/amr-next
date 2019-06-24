import React from "react";
import Link from 'next/link'
import style from './index.less';

export default () => <Link href='/todo'><a className={style.example}>hello</a></Link>
