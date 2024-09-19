import PricingCard from './PricingCard'
import SuggestedCard from './SuggestedCard'
import PublishCard from './PublishCard'
import EmojiCard from './EmojiCard'

const RightBar = () => {
    return (
        <div className='flex flex-col gap-7 bg-[#f5f5f5] mr-3'>
            <PricingCard />
            <EmojiCard />
            <PublishCard />
            <SuggestedCard />
        </div>
    )
}

export default RightBar