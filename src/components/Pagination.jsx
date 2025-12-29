import { For, createMemo, createSignal } from 'solid-js'
import { Pagination } from '@ark-ui/solid/pagination'
import { css } from '@emotion/css'

export const Pagin = (props)=> {
	const pager = createMemo(()=> props.pager || {
		total: 100, pageSize: 20, currentPage: 1,
	})
	const pages = ()=> {
		const totalPages = Math.ceil(pager().total / pager().pageSize)
		if (totalPages <= 5){
			return Array.from({ length: totalPages }, (_, i)=> ({
				type: 'page',
				value: i + 1,
			}))
		}

		const result = []

		for (let i = 1; i <= 3; i++){
			result.push({ type: 'page', value: i })
		}

		result.push({ type: 'ellipsis' })

		for (let i = totalPages - 1; i <= totalPages; i++){
			result.push({ type: 'page', value: i })
		}
		return result
	}
	return <Pagination.Root onPageChange={props.onPageChange} class={containerCss} count={pager().total} pageSize={pager().pageSize} siblingCount={2}>
		<Pagination.PrevTrigger class={buttonCss}>Previous Page</Pagination.PrevTrigger>
		<Pagination.Context>
			{pagination=> <For each={pagination().pages}>
				{(page, index)=> {
					if (page.type === 'page'){
						return <Pagination.Item class={itemCss} value={page.value}>{page.value}</Pagination.Item>
					}
					return <Pagination.Ellipsis class={ellipsisCss} index={index()}>&#8230;</Pagination.Ellipsis>
				}}
			</For>
			}
		</Pagination.Context>
		<Pagination.NextTrigger class={buttonCss}>Next Page</Pagination.NextTrigger>
	</Pagination.Root>
}

export default Pagin

const containerCss = css`
label: PaginationContainer;
display: flex;
align-items: center;
gap: 8px;
margin-top: 16px;
justify-content: center;
`

const buttonCss = css`
label: PaginationButton;
padding: 8px 12px;
border: 1px solid rgb(228,228,231);
border-radius: 4px;
background-color: white;
cursor: pointer;
user-select: none;
transition: background-color 0.2s ease;
font-size: 14px;

&:hover:not([disabled]) {
	background-color: rgb(250,250,250);
}

&[disabled] {
	cursor: not-allowed;
	opacity: 0.5;
}
`

const itemCss = css`
label: PaginationItem;
padding: 8px 12px;
border: 1px solid rgb(228,228,231);
border-radius: 4px;
background-color: white;
cursor: pointer;
user-select: none;
transition: background-color 0.2s ease;
min-width: 40px;
text-align: center;
font-size: 14px;

&:hover {
	background-color: rgb(250,250,250);
}

&[data-selected] {
	background-color: rgb(228,228,231);
	font-weight: 500;
}
`

const ellipsisCss = css`
label: PaginationEllipsis;
padding: 8px 12px;
user-select: none;
font-size: 14px;
`
