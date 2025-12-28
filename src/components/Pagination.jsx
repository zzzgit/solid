import { For, createSignal } from 'solid-js'
import { Pagination } from '@ark-ui/solid/pagination'
import { css } from '@emotion/css'

export const Pagin = (props)=> {
	// const pager = props.pager || {}
	const pager = {
		total: 1123,
		pageSize: 20,
		currentPage: 1,
	}
	return <Pagination.Root class={containerCss} count={pager.total} pageSize={pager.pageSize} siblingCount={2}>
		<Pagination.PrevTrigger>Previous Page</Pagination.PrevTrigger>
		<Pagination.Context>
			<For each={[{ type: 'page', value: 1 }, { type: 'page', value: 2 }, { type: 'ellipsis' }, { type: 'page', value: 10 }, { type: 'page', value: 11 }]}>
				{(page, index)=> {
					if(page.type === 'page'){
						return <Pagination.Item {...page}>{page.value}</Pagination.Item>
					}
					return <Pagination.Ellipsis index={index()}>&#8230;</Pagination.Ellipsis>
				}

				}
			</For>
		</Pagination.Context>
		<Pagination.NextTrigger>Next Page</Pagination.NextTrigger>
	</Pagination.Root>
}

export default Pagin

const containerCss = css`
display: flex;
align-items: center;
gap: 8px;
margin-top: 16px;
justify-content: center;

`
