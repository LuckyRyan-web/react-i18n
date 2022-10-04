/**
 * @author liuyuan
 * @date 2022-10-04 20:58
 * @since 0.0.0
 */

import React from 'react'
//import classnames from 'classnames'
//import style from './style.module.scss'
import { useTranslation } from 'react-i18next'

interface TransitionProps {}

const Transition: React.FC<TransitionProps> = (props) => {
    const { t, i18n } = useTranslation()

    return (
        <div>
            <div>测试的内容：{t('title')}</div>
            <div>
                <button
                    onClick={() => {
                        i18n.changeLanguage('en')
                    }}
                >
                    切换为英文
                </button>
                <button
                    onClick={() => {
                        i18n.changeLanguage('zh')
                    }}
                >
                    切换为中文
                </button>
            </div>
        </div>
    )
}

export default React.memo(Transition)
